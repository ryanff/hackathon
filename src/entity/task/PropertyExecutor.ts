import type { CustomClass } from "@/types";
import { inject, injectable } from "inversify";
import { TYPES } from "@/constants";
import { Log } from "@/entity";
import { Executor } from "@/entity/task/Executor";

@injectable()
export class PropertyExecutor implements Executor {

    @inject(TYPES.Log)
    private logger?: CustomClass<Log>


    generateParams() {
        this.logger?.log('PropertyExecutor generateParams')
        return {
            type: 'PropertyExecutor'
        };
    }
}
