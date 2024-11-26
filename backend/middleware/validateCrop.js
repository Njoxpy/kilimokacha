const validateCrop = (req, res, next) => {

    const { crop, price, location, supplyStatus } = req.body;

    // Check if any required fields are missing
    if (!crop || price == null || !location || !supplyStatus) {
        return res.status(400).json({ message: "All fields are required" });
    }

    // Check if price is a positive number
    if (typeof price !== "number" || price < 0) {
        return res.status(400).json({ message: "Price must be a positive number" });
    }

    next();
}

module.exports = {
    validateCrop
}
