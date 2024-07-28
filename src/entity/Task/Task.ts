import { AbstractTask } from "@/entity/Task/AbstractTask.ts";
import { inject, injectable } from "inversify";
import { TYPES } from "@/constants";
import { Executor } from "@/entity/Task/Executor.ts";
import { TaskJson } from "@/types/task.ts";
import type { CustomClass } from "@/types";
import { Log } from "@/entity";
import { ExecutorFactory } from "@/entity/Task/ExecutorFactory.ts";

@injectable()
export class Task implements AbstractTask {

    params?: any

    taskExecutor?: Executor;

    @inject(TYPES.Log)
    private logger?: CustomClass<Log>

    @inject(TYPES.ExecutorFactory)
    private executorFactory?: ExecutorFactory

    /**
     * 解析任务json，确定使用何种任务执行器
     * @param params
     */
    initTask(params: TaskJson) {
        this.taskExecutor = this.executorFactory?.getExecutor(params.type)
    }

    generateParams() {
        if (!this.taskExecutor) return {}
        this.params = this.taskExecutor.generateParams()
    }

    submit() {
        this.logger?.log(this.params)
    }
}
