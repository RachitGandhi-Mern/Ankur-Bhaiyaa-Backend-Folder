const  { GoogleGenAI } = require("@google/genai")

const ai = new GoogleGenAI({
    apiKey:process.env.GEMINI_API_KEY
});
 async function generateCaption(base64ImageFile){
  const contents = [
  {
    inlineData: {
      mimeType: "image/jpeg",
      data: base64ImageFile,
    },
  },
  { text: "Caption this image." },
];

const response = await ai.models.generateContent({
  model: "gemini-2.5-flash",
  contents: contents,
  config: {
      systemInstruction: " You are an expert in crafting funny, witty, and attention-grabbing captions for images.  Whenever an image is provided: Analyze the image carefully to understand its context, mood, and details.  Create a short, concise, and hilarious caption that perfectly matches the image. The caption must be clever, engaging, and ideally under 15 words.Keep it natural and conversational — avoid overexplaining.Add a touch of humor, sarcasm, or irony where suitable.Optionally include relevant emojis or hashtags if they enhance the humor.  Output only the final caption.",
    },
});
return response.text;
}

module.exports = generateCaption



// export GEMINI_API_KEY="YOUR_API_KEY_HERE"
// echo $GEMINI_API_KEY

