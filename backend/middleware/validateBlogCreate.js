const validateBlogCreate = (req, res, next) => {
    const { title, body, thumbnail_image, author } = req.body

    if (!title || !body || !author) {
        return res.json("all required fields must be filled")
    }

    next()
}

module.exports = validateBlogCreate