import { TaskJson } from '../../types/task.ts';

export declare abstract class AbstractTask {
    params?: TaskJson;
    initTask(params: TaskJson): void;
    generateParams(): void;
    submit(): void;
}
