const express = require('express')

const blogRouter = express.Router()

// GET: get blogs
blogRouter.get("/posts", (req, res) => {
    res.json({ message: "get the list of blogs available" })
})

// GET: get single blog by id
blogRouter.get("/posts/:id", (req, res) => {
    res.json({ message: "get the single blog post by id" })
})


// DELETE: delete blog by id
blogRouter.delete("/posts/:id", (req, res) => {
    res.json({ message: "delete blog post by id" })
})

// GET: get authors
blogRouter.get("/authors", (req, res) => {
    res.json({ author1: "Njox", author2: "Mjuni" })
})

// GET: get authors by id
blogRouter.get("/authors/:id", (req, res) => {
    res.json({ name: 'Njox', category: "farming" })
})

// POST: add new author
blogRouter.post("/authors", (req, res) => {
    res.json({ name: 'new author has been added'})
})

// PUT: update authors by id
blogRouter.put("/authors/:id", (req, res) => {
    res.json("update author by id")
})

// DELETE: delete author by id
blogRouter.delete("/authors/:id", (req, res) => {
    res.json("delete author by id")
})

// GET: get by search
blogRouter.get("/search", (req, res) => {
    const query = req.query.query; // Access the query parameter from req.query
    if (query) {
        res.json({ message: `You searched for: ${query}` });
    } else {
        res.json({ message: "No search query provided" });
    }
});


// GET: get by blog by category
blogRouter.get("/:category", (req, res) => {
    res.json({ message: "blog category" })
})

// POST: add blog
blogRouter.post("/new", (req, res) => {
    res.json({ message: "add new blog" })
})

// categories
blogRouter.get("/categories", (req, res) => {
    res.json("get all blogs categories")
})

// POST: add new blog category
blogRouter.post("/categories/new", (req, res) => {
    res.json("add new blog category")
})

// GET: Get single category
blogRouter.put("/categories/:id", (req, res) => {
    res.json("update blog category")
})

// PATCH: update blog category
blogRouter.put("/categories/:id", (req, res) => {
    res.json("update blog category")
})


// DELETE: Delete blog category
blogRouter.delete("/categories/:id", (req, res) => {
    res.json("delete blog category into the project!")
})

// comments
// GET: comment for blog post
blogRouter.get("/posts/:id/comments", (req, res) => {
    res.json({ message: "get list of comments available for a blog post" })
})

// POST: add comment for blog post
blogRouter.post("/posts/:id/comments", (req, res) => {
    res.json({ message: "add comment into a blog post" })
})

// PUT: Update comment by id
blogRouter.put("/posts/:id/comments/:commentID", (req, res) => {
    res.json({ message: "update comment into a blog post" })
})

// DELETE: delete comment by id
blogRouter.delete("/posts/:id/comments/:commentID", (req, res) => {
    res.json({ message: "delete a comment into blog post by id" })
})

// Tags
//  GET: get all tags
blogRouter.get("/tags", (req, res) => {
    res.json({ message: "get tags" })
})

// POST : Crete new blog tag
blogRouter.post("/tags", (req, res) => {
    res.json({ message: "create new blog tag" })
})

// UPDATE: Update tag
blogRouter.put("/tags/:id", (req, res) => {
    res.json({ message: "update blog tag" })
})

// DELETE: Delete tag
blogRouter.delete("/tags/:id", (req, res) => {
    res.json({ message: "delete blog tag" })
})

module.exports = blogRouter