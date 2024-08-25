import { Container } from "inversify";
import { CustomClass } from "./types";
import { TYPES } from "./constants";
import { Log } from "./entity";
import { PropertyExecutor } from "@/entity/task/PropertyExecutor";
import { Task } from "@/entity/task/Task.ts";
import { StructureExecutor } from "@/entity/task/StructureExecutor";
import { ExecutorFactory } from "@/entity/task/ExecutorFactory";
import { AbstractRender } from "@/entity/render/AbstractRender.ts";
import { CarRender } from "@/entity/render/CarRender.ts";
import { ModelManager } from "@/entity/model/ModelManager.ts";
import { Car } from "@/entity/model/Car.ts";
import { Light } from "@/entity/model/Light.ts";

const myContainer = new Container();
const carContainer = new Container();

myContainer.bind<CustomClass<Log>>(TYPES.Log).to(Log);

myContainer.bind<CustomClass<Task>>(TYPES.Task).to(Task);
myContainer.bind<CustomClass<ExecutorFactory>>(TYPES.ExecutorFactory).to(ExecutorFactory);
myContainer.bind<CustomClass<PropertyExecutor>>(TYPES.PropertyExecutor).to(PropertyExecutor);
myContainer.bind<CustomClass<StructureExecutor>>(TYPES.StructureExecutor).to(StructureExecutor);


carContainer.bind<CustomClass<AbstractRender>>(TYPES.Render).to(CarRender);
carContainer.bind<CustomClass<ModelManager>>(TYPES.ModelManager).to(ModelManager);
carContainer.bind<CustomClass<Car>>(TYPES.Car).to(Car);
carContainer.bind<CustomClass<Light>>(TYPES.Light).to(Light);


export { myContainer, carContainer };
