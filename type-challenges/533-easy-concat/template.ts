type Concat<T extends unknown[], U extends unknown[]> = [...T, ...U]


// unknown 与 any
// unknown 是 top type (任何类型都是它的 subtype)
// any 即是 top type, 又是 bottom type (它是任何类型的 subtype ) ,这导致 any 基本上就是放弃了任何类型检查