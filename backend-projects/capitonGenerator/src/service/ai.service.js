// const  { GoogleGenAI } = require("@google/genai");
// const ai = new GoogleGenAI({
//     apiKey:process.env.Google_API_KEY
// });


// const captionGenerator = async (base64ImageFile)=>{
// const contents = [
//   {
//     inlineData: {
//       mimeType: "image/jpeg",
//       data: base64ImageFile,
//     },
//   },
//   { text: "short Caption this image ,for uploading on social media" },
// ];

// const response = await ai.models.generateContent({
//   model: "gemini-2.5-flash",
//   contents: contents,
// });

// const caption = response.candidates?.[0]?.content?.parts?.[0]?.text;
// return caption;


// }

// module.exports =captionGenerator;


const { GoogleGenAI } = require("@google/genai");
const ai = new GoogleGenAI({
  apiKey: process.env.Google_API_KEY
});

const captionGenerator = async (base64ImageFile) => {
  try {
    const contents = [
      {
        inlineData: {
          mimeType: "image/jpeg",
          data: base64ImageFile,
        },
      },
      { 
        text: "Write only ONE short catchy caption (max 15 words) for this image, like for Instagram. No hashtags, no explanations, just the caption." 
      },
    ];

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: contents,
    });

    //console.log("Gemini Response:", JSON.stringify(response, null, 2));

    const caption = response.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
    if (!caption) throw new Error("No caption generated");
    return caption;

  } catch (error) {
    console.error("AI Error:", error.message);
    throw new Error("Failed to generate caption");
  }
};

module.exports = captionGenerator;
