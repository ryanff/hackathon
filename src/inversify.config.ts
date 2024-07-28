import { Container } from "inversify";
import { CustomClass } from "./types";
import { TYPES } from "./constants";
import { Log } from "./entity";
import { PropertyExecutor } from "@/entity/Task/PropertyExecutor";
import { Task } from "@/entity/Task/Task.ts";
import { StructureExecutor } from "@/entity/Task/StructureExecutor";
import { ExecutorFactory } from "@/entity/Task/ExecutorFactory";

const myContainer = new Container();

myContainer.bind<CustomClass<Log>>(TYPES.Log).to(Log);

myContainer.bind<CustomClass<Task>>(TYPES.Task).to(Task);
myContainer.bind<CustomClass<ExecutorFactory>>(TYPES.ExecutorFactory).to(ExecutorFactory);
myContainer.bind<CustomClass<PropertyExecutor>>(TYPES.PropertyExecutor).to(PropertyExecutor);
myContainer.bind<CustomClass<StructureExecutor>>(TYPES.StructureExecutor).to(StructureExecutor);

export { myContainer };
