import { OpenAI } from "openai";

export const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

// const prompt = "Once upon a time";
// const model = "gpt-3.5-turbo";
// const parameters = {
//   prompt,
// };

export const generateParams = (
  messages: OpenAI.ChatCompletionMessageParam[]
) => {
  return {
    messages,
    model: "gpt-3.5-turbo",
    stream: true,
  };
};
