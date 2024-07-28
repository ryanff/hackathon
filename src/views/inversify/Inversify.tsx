import { defineComponent, onBeforeUnmount, onMounted, ref } from "vue";
import { myContainer } from "@/inversify.config";
import { TYPES } from "@/constants";
import { TaskJson, TaskType } from "@/types";
import { Task } from "@/entity/Task/Task";
import { Button } from 'ant-design-vue';
import { MARVIN_URI } from "@/config/envVars.ts";

interface MarvinPostMessageParams {
    method: MarvinMethod;
    args?: any[];
}

interface MarvinPostMessageResult {
    params: MarvinPostMessageParams;
    result?: any;
}

type MarvinMethod = "exportStructure";

export default defineComponent({
    name: "Inversify",
    setup() {
        const task = myContainer.get<Task>(TYPES.Task);

        const marvinRef = ref();

        const mrv = ref("");

        const createTask = (type: TaskType) => {
            const taskJson: TaskJson = {
                id: "123",
                type,
            };

            task.initTask(taskJson);

            task.generateParams();

            task.submit();
        };

        const getMarvinData = () => {
            const params: MarvinPostMessageParams = {
                method: "exportStructure",
                args: ["mrv"],
            };
            marvinRef.value.contentWindow.postMessage(
                JSON.stringify(params),
                MARVIN_URI
            );
        };

        const bindMessageListener = () => {
            window.addEventListener("message", bindMarvinCallback);
        };

        const removeMessageListener = () => {
            window.removeEventListener("message", bindMarvinCallback);
        };

        const bindMarvinCallback = (event: MessageEvent) => {
            if (event.origin === MARVIN_URI) {
                const data = JSON.parse(event.data) as MarvinPostMessageResult;
                const { params } = data;
                if (params.method === "exportStructure") {
                    mrv.value = data.result;
                }
            }
        };

        const init = () => {
            bindMessageListener();
        };

        const dispose = () => {
            removeMessageListener();
        };

        onMounted(init);

        onBeforeUnmount(dispose);

        return { marvinRef, mrv, createTask, getMarvinData };
    },
    methods: {
        renderMarvin() {
            return (
                <div>
                    <iframe
                        ref="marvinRef"
                        class="w-[600px] h-[400px]"
                        src={ `${ MARVIN_URI }/marvin_latest/editor.html` }
                    ></iframe>
                </div>
            );
        },
    },
    render() {
        return (
            <div>
                { this.renderMarvin() }
                <div>{ this.mrv }</div>
                <Button
                    type={ 'default' }
                    { ...{ onClick: () => this.createTask("property") } }
                >
                    Property Task
                </Button>
                <Button
                    type="primary"
                    { ...{ onClick: () => this.createTask("structure") } }
                >
                    Structure Task
                </Button>
                <Button onClick={ this.getMarvinData }>获取marvin内容mrv</Button>
            </div>
        );
    },
});
