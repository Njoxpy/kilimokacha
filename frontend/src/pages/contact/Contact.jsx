import Footer from "../../components/Footer";

const Contact = () => {
    return (
        <>

            <section className="contact-us bg-gray-50 py-16 text-center">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold text-green-500">Contact Us</h2>
                    <p className="mt-4 text-gray-700">
                        Have questions or feedback? We’d love to hear from you!
                    </p>

                    <div className="mt-8 max-w-lg mx-auto">
                        <form>
                            <div className="grid grid-cols-1 gap-6">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="border border-gray-300 p-4 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                                    required
                                />
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="border border-gray-300 p-4 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                                    required
                                />
                                <textarea
                                    rows="4"
                                    placeholder="Your Message"
                                    className="border border-gray-300 p-4 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="mt-4 bg-green-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-600 transition duration-300"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>


                    <div className="mt-8 text-gray-700">
                        <h3 className="text-xl font-bold">Our Contact Information</h3>
                        <p>Email: <a href="mailto:info@kilimokacha.com" className="text-green-500">info@kilimokacha.com</a></p>
                        <p>Phone: <a href="tel:+255623216660" className="text-green-500">+255 623 216 660</a></p>
                        <p>Location: 123 kilimokacha St, Farm City, Country</p>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default Contact;