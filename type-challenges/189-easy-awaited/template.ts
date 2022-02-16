type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer U>
  ? U extends Promise<unknown>
    ? MyAwaited<U>
    : U
  : never

// 1. 等于左边 T extends Promise<unknown> 是先校验传入的类型是否是 Promise
// 2. 使用 infer 来获取 Promise 内的类型
// 3. 递归处理Promise