const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const streamifier = require("streamifier");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = multer.memoryStorage();

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // Limit file size to 5MB
  },
  fileFilter: (req, file, cb) => {
    // Validate file types if needed
    if (
      file.mimetype.startsWith("image/") ||
      file.mimetype === "application/pdf" ||
      file.mimetype === "application/msword" ||
      file.mimetype ===
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {
      cb(null, true);
    } else {
      cb(new Error("Unsupported file format"), false);
    }
  },
});

const uploadToCloudinary = (buffer, options = {}) => {
  return new Promise((resolve, reject) => {
    const uploadOptions = {
      folder: options.folder || "ten-internship",
      public_id: options.public_id,
      resource_type: options.resource_type || "auto",
    };
    const stream = cloudinary.uploader.upload_stream(
      uploadOptions,
      (error, result) => {
        console.log("Cloudinary callback triggered");
        if (error) {
          console.error("Cloudinary upload error:", error);
          return reject(error);
        }
        resolve(result);
      }
    );

    // Piping the buffer to Cloudinary stream
    const readStream = streamifier.createReadStream(buffer);
    readStream.pipe(stream);
  });
};

// Middleware to handle single file upload
const uploadSingle = (fieldName) => {
  return async (req, res, next) => {
    // Use multer to process the upload
    upload.single(fieldName)(req, res, async (err) => {
      if (err) {
        if (err instanceof multer.MulterError) {
          // A multer error occurred when uploading
          return res.status(400).json({
            success: false,
            message: err.message,
          });
        }
        return res.status(500).json({
          success: false,
          message: err.message,
        });
      }

      // If no file was uploaded, continue
      if (!req.file) {
        return next();
      }

      console.log(req.file.buffer);

      try {
        console.log("Uploading file to cloudinary");
        let resourceType = "auto"; // default
        if (req.file.mimetype === "application/pdf") {
          console.log("File type is pdf");
          resourceType = "raw";
        } else if (req.file.mimetype.startsWith("image/")) {
          console.log("file type is image");
          resourceType = "image";
        }
        // Upload the file to Cloudinary
        const result = await uploadToCloudinary(req.file.buffer, {
          resource_type: resourceType,
        });
        console.log(result);
        console.log("File uploaded to cloudinary =", result.secure_url);

        // Add Cloudinary data to the request
        req.cloudinaryFile = {
          url: result.secure_url,
          publicId: result.public_id,
          format: result.format,
          width: result.width,
          height: result.height,
          originalName: req.file.originalname,
          size: req.file.size,
        };

        console.log("Calling next() after successful upload!");
        next();
      } catch (error) {
        return res.status(500).json({
          success: false,
          message: "Error uploading to Cloudinary",
          error: error.message,
        });
      }
    });
  };
};

module.exports = uploadSingle;
