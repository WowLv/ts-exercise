type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
}

//1.返回一个对象
//2.遍历时加上readonly关键字
//3.keyof