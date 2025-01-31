const validateAdviceCreate = (req, res, next) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return res.json({ message: "fill all required fields" });
  }

  //   check length

  next();
};

module.exports = validateAdviceCreate;
