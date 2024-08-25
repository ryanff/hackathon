import {injectable} from "inversify";

@injectable()
export class Log {
    constructor() {

    }

    log(...args: any[]) {
        console.log(...args);
    }

    error(...args: any[]) {
        console.error(...args);
    }
}


