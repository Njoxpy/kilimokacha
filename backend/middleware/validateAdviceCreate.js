const validateAdviceCreate = (req, res, next) => {

    const { title, image, description } = req.body

    if (!title || !image || !description) {
        return res.json({ message: "fill all required fields" })
    }
    next()
}

module.exports = validateAdviceCreate;