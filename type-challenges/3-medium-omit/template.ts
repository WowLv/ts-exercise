type MyOmit<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P]
}

// 结合 Pick + Exclude
// type MyPick<T, K extends keyof T> = {
//   [P in K]: T[P];
// };

// type MyExclude<T, U> = T extends U ? never : T