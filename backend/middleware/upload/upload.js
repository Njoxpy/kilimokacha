const multer = require("multer");
const path = require("path");

// Define storage settings
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Ensure the 'uploads/images' directory is used for storing the images
    cb(null, path.join(__dirname, "..", "uploads")); // Correct the path here
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    ); // Add the file extension
  },
});

// Initialize multer with the storage and file limits
const uploadImage = multer({
  storage: storage,
  limits: { fileSize: 10000000 }, // 10MB max file size
  fileFilter: (req, file, cb) => {
    // Only accept image files
    const filetypes = /jpeg|jpg|png|gif/;
    const extname = filetypes.test(
      path.extname(file.originalname).toLowerCase()
    );
    const mimetype = filetypes.test(file.mimetype);

    if (extname && mimetype) {
      return cb(null, true);
    } else {
      cb(new Error("Only image files are allowed."));
    }
  },
});

module.exports = uploadImage;
