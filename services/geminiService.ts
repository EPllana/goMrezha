
import { GoogleGenAI, Type } from "@google/genai";

if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable not set");
}
  
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateWebsiteIdea = async (businessType: string): Promise<string> => {
    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: `Generate a creative and modern website tagline and a unique one-paragraph design concept for a '${businessType}'.`,
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.OBJECT,
                    properties: {
                        tagline: {
                            type: Type.STRING,
                            description: "A short, catchy tagline for the website."
                        },
                        concept: {
                            type: Type.STRING,
                            description: "A one-paragraph description of a unique and modern design concept for the website."
                        }
                    },
                    required: ["tagline", "concept"]
                },
                temperature: 0.8,
            },
        });
        
        return response.text;

    } catch (error) {
        console.error("Error generating website idea:", error);
        throw new Error("Failed to generate an idea. Please check your API key and try again.");
    }
};
