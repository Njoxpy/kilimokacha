const { NOT_FOUND, SERVER_ERROR, OK, BAD_REQUEST } = require("../constants/responseCode");
const nodeMailer = require("nodemailer");
const Subscriber = require("../models/subscribeModel");

const transporter = nodeMailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_USER,   
        pass: process.env.EMAIL_PASS,  
    },
});



const subscribe = async (req, res) => {
    const { email } = req.body;

    // Check if email is provided
    if (!email) {
        return res.status(BAD_REQUEST).json({ message: "Email is required" });
    }

    try {
        // Check for existing subscriber
        const existingSubscriber = await Subscriber.findOne({ email });
        if (existingSubscriber) {
            return res.status(BAD_REQUEST).json({ message: "Email already subscribed" });
        }

        /* save subscriber if the the request is correct */
        // Save new subscriber
        const newSubscriber = await Subscriber.create({ email });

        // Optionally send a confirmation email
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: "Subscription Confirmation",
            text: "Thank you for subscribing to our service!",
        };

        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                console.error("Error sending email:", err.message);
            } else {
                console.log("Email sent:", info.response);

                // Respond with the new subscriber's email
                res.status(OK).json({ message: "Successfully subscribed", email: newSubscriber.email });
            }
            res.status(BAD_REQUEST).json({message:"invalid ", err: err.message})
        });
    } catch (error) {
        res.status(SERVER_ERROR).json({ message: "Failed to subscribe", error: error.message });
    }
};

// get the list of subscribers

// update

// delete

// get single email

module.exports = {
    subscribe,
};
