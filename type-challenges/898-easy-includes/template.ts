import { Equal } from "@type-challenges/utils"

export type Includes<T extends any[], U> = 
  T extends [infer A, ...infer B] 
    ? Equal<A, U> extends true 
      ? true 
      : Includes<B, U>
    : false


// 递归查找数组中的值