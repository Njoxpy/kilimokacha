// title , description, body
const validateAdviceCreate = async (req, res, next) => {
  const { title, description, body } = req.body;

  if (!title || !description || !body) {
    return res.json({ message: "all required fields must be filled" });
  }

  if (title.length < 40 || title.length > 60) {
    return res.json({
      message: "title length should be between 40 and 60 characters",
    });
  }

  if (description.length < 120 || description.length > 160) {
    return res.json({
      message: "description length should be between 120 and 160 characters",
    });
  }

  if (body.length < 300 || body.length > 3000) {
    return res.status(400).json({
      message: "body length should be between 300 and 3000 characters",
    });
  }

  next();
};

module.exports = validateAdviceCreate;
