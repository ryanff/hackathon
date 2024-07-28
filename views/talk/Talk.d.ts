import { OpenAI } from 'openai';

declare const _default: import('vue').DefineComponent<{}, {
    text: import('vue').Ref<string>;
    inputVal: import('vue').Ref<string>;
    history: import('vue').Ref<({
        content: string;
        role: "system";
        name?: string | undefined;
    } | {
        content: string | ({
            text: string;
            type: "text";
        } | {
            image_url: {
                url: string;
                detail?: "auto" | "low" | "high" | undefined;
            };
            type: "image_url";
        })[];
        role: "user";
        name?: string | undefined;
    } | {
        role: "assistant";
        content?: string | null | undefined;
        function_call?: {
            arguments: string;
            name: string;
        } | undefined;
        name?: string | undefined;
        tool_calls?: {
            id: string;
            function: {
                arguments: string;
                name: string;
            };
            type: "function";
        }[] | undefined;
    } | {
        content: string;
        role: "tool";
        tool_call_id: string;
    } | {
        content: string | null;
        name: string;
        role: "function";
    })[]>;
    handleSubmit: () => Promise<void>;
}, {}, {}, {
    renderHistory(item: OpenAI.ChatCompletionMessageParam): string | OpenAI.Chat.Completions.ChatCompletionContentPart[] | null | undefined;
    renderAssistant(item: OpenAI.ChatCompletionAssistantMessageParam): string | null | undefined;
    renderUser(item: OpenAI.ChatCompletionUserMessageParam): string | OpenAI.Chat.Completions.ChatCompletionContentPart[];
}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{}>>, {}, {}>;
export default _default;
