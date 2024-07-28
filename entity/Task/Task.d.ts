import { AbstractTask } from './AbstractTask.ts';
import { Executor } from './Executor.ts';
import { TaskJson } from '../../types/task.ts';

export declare class Task implements AbstractTask {
    params?: any;
    taskExecutor?: Executor;
    private logger?;
    private executorFactory?;
    /**
     * 解析任务json，确定使用何种任务执行器
     * @param params
     */
    initTask(params: TaskJson): void;
    generateParams(): {} | undefined;
    submit(): void;
}
