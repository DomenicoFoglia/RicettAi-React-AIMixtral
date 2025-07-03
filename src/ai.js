import { InferenceClient } from '@huggingface/inference';

const SYSTEM_PROMPT = `
    You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page. Please respond in Italian.`;

// Passa il token direttamente come stringa
const hf = new InferenceClient(import.meta.env.VITE_HF_ACCESS_TOKEN);

export async function getRecipeFromMistral(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ");

    try {
        const response = await hf.chatCompletion({
            model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: `Ho questi ingredienti: ${ingredientsString}. Potresti suggerirmi una ricetta che posso preparare?` },
            ],
            max_tokens: 512,
            temperature: 0.7,
        });

        return response.choices[0].message.content;

    } catch (err) {
        console.error("Errore nell'API HuggingFace:", err);
        
        if (err.message.includes('401')) {
            throw new Error("Token non valido");
        } else if (err.message.includes('429')) {
            throw new Error("Troppe richieste. Riprova tra qualche minuto");
        } else if (err.message.includes('503')) {
            throw new Error("Modello non disponibile. Riprova più tardi");
        } else {
            throw new Error("Errore nel recupero della ricetta: " + err.message);
        }
    }
}