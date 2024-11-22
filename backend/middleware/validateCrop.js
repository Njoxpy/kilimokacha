const validateCrop = (req, res, next) => {
    // Destructure fields from req.body
    const { crop, price, location, supplyStatus } = req.body;

    // Check if any required fields are missing
    if (!crop || price == null || !location || !supplyStatus) {
        return res.status(400).json({ message: "All fields are required" });
    }

    // Check if price is a positive number
    if (typeof price !== "number" || price < 0) {
        return res.status(400).json({ message: "Price must be a positive number" });
    }

    // If everything is valid, proceed to the next middleware
    next();
}

module.exports = {
    validateCrop
}
