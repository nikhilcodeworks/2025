const express = require('express');
const multer = require('multer');
const router = express.Router();
const up = require("../service/storage.service");
const Song = require('../models/songs.model');  // Model name Capital hota hai

const upload = multer({
    storage: multer.memoryStorage()
});

// Middleware to parse JSON body data
router.use(express.json());

// POST API: Upload Audio & Save Song Metadata
// router.post('/songs', upload.single('audio'), async (req, res) => {
//     try {
//         // Upload file to external storage (S3, etc.)
//         const fileData = await up(req.file.buffer, req.file.originalname);
//         console.log('File Uploaded:', fileData);

//         // Save Song Data to MongoDB
//         const newSong = new Song({
//             title: req.body.title,
//             artist: req.body.artist,
//             audio: fileData.url,
//             mood: req.body.mood
//         });

//         await newSong.save();

//         res.status(200).json({
//             success: true,
//             message: 'Song uploaded and saved successfully!',
//             song: newSong
//         });

//     } catch (error) {
//         console.error(error);
//         res.status(500).json({
//             success: false,
//             message: 'Song upload failed',
//             error: error.message
//         });
//     }
// });

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;  // Secure Password (should be in env file in production)

router.post('/songs', upload.single('audio'), async (req, res) => {
    try {
        // Password Verification
        const { password, title, mood } = req.body;
        if (password !== ADMIN_PASSWORD) {
            return res.status(401).json({
                success: false,
                message: 'Unauthorized: Incorrect Password'
            });
        }

        // Upload file to external storage (S3, etc.)
        const fileData = await up(req.file.buffer, req.file.originalname);
        console.log('File Uploaded:', fileData);

        // Save Song Data to MongoDB
        const newSong = new Song({
            title: title,
            audio: fileData.url,
            mood: mood
            
        });

        await newSong.save();

        res.status(200).json({
            success: true,
            message: 'Song uploaded and saved successfully!',
            song: newSong
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Song upload failed',
            error: error.message
        });
    }
});


// GET API: Fetch Songs with Optional Mood Filter
router.get('/fetch/songs', async (req, res) => {
    const mood = req.query.mood;  // Query Param

    try {
        let filter = {};
        if (mood) {
            filter.mood = mood;
        }

        const songs = await Song.find(filter);

        res.status(200).json({
            success: true,
            count: songs.length,
            data: songs
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch songs',
            error: error.message
        });
    }
});

module.exports = router;
