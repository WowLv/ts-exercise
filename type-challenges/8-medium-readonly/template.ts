type MyReadonly2<T, U extends keyof T = keyof T> = {
  readonly [P in U]: T[P]
} & {
  [P in keyof Omit<T, U>]: T[P]
}

// keyof
// 巩固 Omit