import { defineComponent, ref } from "vue";
import { openai } from "@/utils/openai";
import { OpenAI } from "openai";

export default defineComponent({
  name: "Talk",
  setup() {
    const text = ref("");
    const inputVal = ref("");
    const history = ref<OpenAI.ChatCompletionMessageParam[]>([]);

    const sendMsg = async () => {
      const stream = await openai.chat.completions.create({
        messages: history.value,
        model: "gpt-3.5-turbo",
        stream: true,
      });

      for await (const part of stream) {
        text.value = text.value + part.choices[0]?.delta?.content;
      }
    };

    const handleSubmit = async () => {
      const last: OpenAI.ChatCompletionMessageParam = {
        role: "user",
        content: inputVal.value,
      };
      history.value.push(last);
      sendMsg();
    };

    return { text, inputVal, history, handleSubmit };
  },
  methods: {
    renderHistory(item: OpenAI.ChatCompletionMessageParam) {
      if (item.role === "assistant") {
        return this.renderAssistant(item);
      }
      if (item.role === "user") {
        return this.renderUser(item);
      }
    },
    renderAssistant(item: OpenAI.ChatCompletionAssistantMessageParam) {
      return item.content;
    },
    renderUser(item: OpenAI.ChatCompletionUserMessageParam) {
      return item.content;
    },
  },
  render() {
    return (
      <div class="w-full">
        {/* {this.history.map((item) => {})} */}
        <div>{this.text}</div>

        <div>
          <input vModel={this.inputVal} />
          <button onClick={this.handleSubmit}>提交</button>
        </div>
      </div>
    );
  },
});
