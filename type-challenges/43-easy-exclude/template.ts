type MyExclude<T, U> = T extends U ? never : T

// 排除U集合中存在的属性