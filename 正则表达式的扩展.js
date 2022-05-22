// 百度面试题 科学计数法 从后往前三位一个小数点
// let str = '100000000000'
// let reg = /(?=(\B)(\d{3})+$)/g
// console.log(str.replace(reg, '.'))

// y修饰符 粘连修饰符
// y g 后一次匹配都是从上一次匹配成功的下一个位置开始
// const str = 'aaa_aa_a'
// const reg1 = /a+/g // 每次匹配剩余的
// const reg2 = /a+/y // 从剩余的第一个位置开始匹配 若没匹配成功 输出null 然后从头开始

// console.log(reg1.exec(str))
// console.log(reg2.exec(str))

// console.log(reg1.exec(str))
// console.log(reg2.exec(str))

// console.log(reg1.exec(str))
// console.log(reg2.exec(str))

// u修饰符 Unicode
// \u0000~\uffff
// const str = '\uD842\uDFB7' // 表示一个字符 是一个整体 不要当成一个字符串看待
// console.log(/^\uD842/.test(str)) // es5 true 因为在es5里由于超出范围 所以把它当成两个字符看待了
// console.log(/^\uD842/u.test(str)) // es6 false 这里加了u修饰符 就可以识别出上面超出范围的字符是一个字符

// '.'表示除了换行符以外的任意单个字符 但是碰到超出范围的却不能识别 因此要使用u修饰符
// console.log(/^.$/.test(str)) // false
// console.log(/^.$/u.test(str)) // true

// 用码点值识别字符也要加u修饰符
// console.log(/\u{61}/.test('a')) // false
// console.log(/\u{61}/u.test('a')) // true

// 因为这个字超出范围了
// console.log(/𠮷{2}/.test('𠮷𠮷')) // false
// console.log(/𠮷{2}/u.test('𠮷𠮷')) // true