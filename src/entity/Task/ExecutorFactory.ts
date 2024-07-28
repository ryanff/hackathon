import { inject, injectable } from "inversify";
import { TaskType } from "@/types";
import { PropertyExecutor } from "@/entity/Task/PropertyExecutor.ts";
import { TYPES } from "@/constants";
import { StructureExecutor } from "@/entity/Task/StructureExecutor.ts";

@injectable()
export class ExecutorFactory {

    @inject(TYPES.PropertyExecutor)
    private propertyExecutor?: PropertyExecutor

    @inject(TYPES.StructureExecutor)
    private structureExecutor?: StructureExecutor

    getExecutor(type: TaskType) {
        if (type === 'property') {
            return this.propertyExecutor
        }
        if (type === 'structure') {
            return this.structureExecutor
        }
    }
}
