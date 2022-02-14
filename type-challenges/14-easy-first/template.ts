type First<T extends any[]> = T extends [infer First, ...infer Other]
  ? First
  : never

// 1. extends 类型条件判断
// 2. extends union  判断的规则
// 3. inter 的使用(推断)