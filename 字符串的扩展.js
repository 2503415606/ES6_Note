// Unicode
// es6 \uxxxx xxxx是码点 0000~ffff 超过这个范围就要用两个字节去表示 \u20BB7 -> \u20BB+7
// 解决方法 -> \u{20BB7} 表示超出范围的Unicode编码
// console.log('\u007A' === 'z')
// console.log('\u{7A}' === 'z')

// // 斜杠加非特殊字符
// console.log('\z' === 'z') // true
// // \HHH 三个八进制的数 也可以表示字符
// console.log('\172' === 'z')

// // \xHH \x7A 两个16进制数也可以表示字符
// console.log('\x7A' === 'z')

// 字符串的遍历器接口
// for (let item of 'zhaosy') {
//     console.log(item)
// }

// ***模板字符串(重点)
// 碰到很长需要换行的字符串
// const str1 = 'sdfsdfsdf\n'
//     + 'asdasdasdwqwe\n'
//     + 'qwexfzxf'
// console.log(str1)

// 使用反引号
// const str2 = `sdfsdfsdf
// asdasdasdwqwe
// qwexfzxf`
// console.log(str2)

// const str3 = `
// <ul>
//     <li>1</li>
//     <li>2</li>
//     <li>3</li>
// </ul>
// `
// console.log(str3)

// const a = 20
// const b = 14
// const c = 'ES'
// // const str3 = '我的年龄是:' + a + b + ',我再讲的是' + 'ES'
// const str4 = '我的年龄是:' + (a + b) + ',我在讲的是' + 'ES'
// console.log(str4)
// const str5 = `我的年龄是:${a + b},我在讲的是${c}`
// console.log(str5)

// 嵌套模板
// const isLargeScreen = () => {
//     return true
// }
// let class1 = 'icon'
// class1 += isLargeScreen() ? ' icon-big' : ' icon-small'
// console.log(class1)
// const class2 = `icon icon-${isLargeScreen() ? 'big' : 'small'}`
// console.log(class2)

// 带标签的模板字符串
// const foo = (a, b, c, d) => {
//     console.log(a)
//     console.log(b)
//     console.log(c)
//     console.log(d)
// }
// foo(1, 2, 3, 4)
// const name = 'zhaosy'
// const age = 22
// const hobby = 'studying'
// foo`他的名字是${name},年龄${age}岁,${hobby}是爱好`

// 新的方法
// console.log(String.fromCharCode(0x20BB7))// ES5
// console.log(String.fromCodePoint(0x20BB7))// ES6

// 返回是否包含字符串子串
// const str = 'zhaosy'
// console.log(str.indexOf('s')) // 如果没有返回-1
// console.log(str.includes('s'))

// 返回是否是以哪个字符串开头 结尾
// const str = 'zhaosy'
// console.log(str.startsWith('zhao'))
// const str = 'zhaosy'
// console.log(str.endsWith('osy'))

// 返回重复的新的字符串
// const str = 'zhaosy'
// const newStr = str.repeat(3) // 括号里的是次数
// console.log(newStr)