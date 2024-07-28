type MethodKeys<T> = {
    [K in keyof T]: T[K] extends (...args: any[]) => any ? K : K;
}[keyof T];
type CustomClassMethodKeys<T> = MethodKeys<T>;
export type CustomClass<T> = Pick<T, CustomClassMethodKeys<T>>;
export {};
