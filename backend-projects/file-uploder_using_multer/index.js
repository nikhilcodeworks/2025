const express = require('express'); // Import the Express framework
const multer = require('multer'); // Import Multer for handling file uploads
const path = require('path'); // Import Path module for handling file paths
const fs = require('fs'); // Import File System module for file operations
const app = express(); // Initialize an Express application

// Set EJS as the view engine for rendering views
app.set("view engine", 'ejs');

// Create 'uploads' directory if it does not exist
if (!fs.existsSync('uploads')) {
    fs.mkdirSync('uploads');
}

// Configure Multer storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads'); // Specify the directory to save uploaded files
    },
    
    filename: function (req, file, cb) {
        // Create a unique filename using the current timestamp, original name (without extension), and extension
        cb(null, Date.now() + '-' + path.basename(file.originalname, path.extname(file.originalname)) + path.extname(file.originalname));
    }
});

// Set up Multer with file size limit and file type validation
const upload = multer({
    storage: storage, // Use the defined storage configuration
    limits: { fileSize: 1 * 1024 * 1024 }, // Limit file size to 1 MB
    fileFilter: (req, file, cb) => {
        // Validate file type
        const allowedTypes = /pdf/;
        const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase()); // Check file extension
        const mimetype = allowedTypes.test(file.mimetype); // Check file MIME type
        
        if (mimetype && extname) {
            // If the file type is valid, allow it
            return cb(null, true);
        } else {
            // Otherwise, reject the file
            cb(new Error('Only PDF files are allowed'));
        }
    }
});

// Route to render the index view
app.get("/", (req, res) => {
    res.render('index');
});

// Route to handle file uploads
app.post('/upload', upload.single('file'), (req, res, next) => {
    // Success handler: render the 'thank' view
    res.render('thank');
}, (err, req, res, next) => {
    // Error handler
    if (err instanceof multer.MulterError) {
        // Handle Multer-specific errors
        if (err.code === 'LIMIT_FILE_SIZE') {
            return res.status(400).send('File size is too large!');
        }
        // Other Multer errors
        return res.status(500).send(err.message);
    }
    // Handle other types of errors
    return res.status(500).send('An unknown error occurred.');
});

// Start the server on port 3000
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
