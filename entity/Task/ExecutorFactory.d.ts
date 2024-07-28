import { TaskType } from '../../types';
import { PropertyExecutor } from './PropertyExecutor.ts';
import { StructureExecutor } from './StructureExecutor.ts';

export declare class ExecutorFactory {
    private propertyExecutor?;
    private structureExecutor?;
    getExecutor(type: TaskType): PropertyExecutor | StructureExecutor | undefined;
}
