import { TaskJson } from "@/types/task.ts";
 

export abstract class AbstractTask {

    params?: TaskJson

    initTask(params: TaskJson) {
        console.log(params)
    }

    generateParams() {

    }

    submit() {

    }
}
