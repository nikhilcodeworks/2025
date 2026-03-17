const chatModel = require('../models/chat.model');


async function chatController(req, res) {
    try {
        const { title } = req.body;
        const userId = req.user;

        const chat = await chatModel.create({
            user: userId,
            title
        });

        res.status(201).json({
            message: "Chat created successfully",
            chat
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error creating chat" });
    }
}


module.exports= chatController;