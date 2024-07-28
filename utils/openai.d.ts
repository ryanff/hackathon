import { OpenAI } from 'openai';

export declare const openai: OpenAI;
export declare const generateParams: (messages: OpenAI.ChatCompletionMessageParam[]) => {
    messages: OpenAI.Chat.Completions.ChatCompletionMessageParam[];
    model: string;
    stream: boolean;
};
