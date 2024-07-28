type MethodKeys<T> = {
    [K in keyof T]: T[K] extends (...args: any[]) => any ? K : K
}[keyof T];

type CustomClassMethodKeys<T> = MethodKeys<T>

// 4. 获取MyClass的所有方法的类型
export type CustomClass<T> = Pick<T, CustomClassMethodKeys<T>>;
