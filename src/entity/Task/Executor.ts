import {injectable} from "inversify";

@injectable()
export abstract class Executor {
    generateParams() {
        return {}
    }
}
