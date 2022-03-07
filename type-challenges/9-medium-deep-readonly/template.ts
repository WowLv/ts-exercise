type DeepReadonly<T> = {
  readonly[P in keyof T]: T[P] extends Record<string, unknown> 
    ? DeepReadonly<T[P]>
    : T[P]
}


// 递归
// Record 将一个类型的所有属性值都映射到另一个类型上并创造一个新的类型