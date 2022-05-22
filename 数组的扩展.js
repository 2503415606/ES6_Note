// 将伪数组/类数组转化成数组
// DOM
// let divs = document.getElementsByTagName('div')
// console.log(divs)
// let divs1 = document.getElementsByClassName('xx')
// console.log(divs1)
// let divs2 = document.querySelectorAll('.xx')
// console.log(divs2)

// divs2.push(123) 伪数组不能使用数组的方法

// 用slice转化成数组
// let arr = Array.prototype.slice.call(divs2)
// console.log(arr)
// arr.push(123)
// console.log(arr)

// 用Array.from()
// function foo() {
//     console.log(arguments instanceof Array)
// }
// foo(1, 'zhaosy', true)

// let arrayLike = {
//     0: 'es6',
//     1: 'es7',
//     2: 'es8',
//     length: 3
// }
// let res = Array.from(arrayLike)
// res.push('es9')
// console.log(res)

// new Array()时 括号里的参数如果只有一个数 代表建立数组的长度 使用Array.of()就不会出现这种情况
// let arr = new Array(1, 2)
// console.log(arr)

// let arr1 = new Array(3)
// console.log(arr1)

// let arr = Array.of(1, 2)
// console.log(arr)
// let arr1 = Array.of(3)
// console.log(arr1)

// let arr = Array.of(1, 'zhaosy', true, [1, 2, 3], { uname: 'zhaosy' })
// console.log(arr);

// copyWithin(a,b,c)元素替换 a是起始替换元素的索引号 b是从哪个索引号位置开始读取替换a位置的元素 c是到哪个位置停止读取元素
// let arr = [1, 2, 3, 4, 5]
// console.log(arr.copyWithin(1, 3))

// fill(a,b,c) 填充替换 a表示填充的内容 b表示从哪个索引号开始 c表示到哪个位置(包括这个位置)就不替换了
// let arr = new Array(3).fill(6)
// console.log(arr);

// let arr1 = [1, 2, 3, 4, 5, 6]
// arr1.fill('zhaosy', 0, 4)
// console.log(arr1) // ['zhaosy', 'zhaosy', 'zhaosy', 'zhaosy', 5, 6]
// 如果只有一个值 则全部替换
// arr1.fill(0)
// console.log(arr1)

// indexOf() 若包含括号中的值 则返回该值索引号 不能识别NaN
// let arr = [1, 2, 3, NaN]
// console.log(arr.indexOf(NaN))
// console.log(NaN == NaN);
// includes() 返回布尔值 可以识别NaN
// console.log(arr.includes(NaN))
