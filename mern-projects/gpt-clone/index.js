const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const { HfInference } = require('@huggingface/inference');
dotenv.config();

const app = express();
const hf = new HfInference(process.env.HUGGINGFACE_API_KEY); // Make sure the API key is stored in .env

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.get('/', (req, res) => {
    res.render('index',{Request:null ,Response:null});
});

app.post('/chat', async (req, res) => {
    const userRequest = req.body.userRequest; 
    console.log(userRequest);
    // Accessing correct form field

    try {
        const response = await hf.chatCompletion({
            model: 'mistralai/Mistral-Nemo-Instruct-2407', // Specify your model
            messages: [{ role: 'user', content: userRequest }],
            max_tokens: 100,
            temperature: 0.1,
            seed: 0,
        });

        const botResponse = response.choices[0].message.content;

       
        res.render('index', { Request:userRequest, Response: botResponse });
        console.log(botResponse)
    } catch (error) {
        console.error('Error in chat completion:', error);
        res.render('index', { response: 'Error in generating response.' });
    }
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
