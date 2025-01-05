import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const apiKey = "AIzaSyBioMivVoJmVQC6JLIeb0exSvUqFfmYl4U";
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-exp",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run(prompt, image) {
  const chatSession = model.startChat({
    generationConfig,
    history: [],
  });

  let result;
  if (image) {
    // If an image is provided, send both text and image to the model
    const imageParts = [
      {
        inlineData: {
          data: image.split(",")[1], // Extract base64 data (remove the prefix)
          mimeType: "image/jpeg", // Adjust mimeType based on the image type
        },
      },
    ];
    result = await chatSession.sendMessage([prompt, ...imageParts]);
  } else {
    // If no image is provided, send only the text prompt
    result = await chatSession.sendMessage(prompt);
  }

  console.log(result.response.text());
  return result.response.text();
}

export default run;
