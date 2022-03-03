type MyReturnType<T extends (...args: any) => unknown> = 
T extends (...args: any) => infer U 
  ? U 
  : never