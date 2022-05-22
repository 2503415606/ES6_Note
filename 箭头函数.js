// let sum = function (x, y) {
//     return x + y
// }
// console.log(sum(4, 5))

// 箭头函数 左边参数,右边函数体
// let sum = (x, y) => {
//     return x + y
// }
// console.log(sum(3, 4))

// window.addEventListener('load', function () {
//     let oBtn = document.querySelector('#btn')
//     oBtn.addEventListener('click', function () {
//         // console.log(this)
//         // setTimeout(function () {
//         //     //call apply bind
//         //     console.log(this)
//         // }.bind(this), 1000)
//         setTimeout(() => {
//             console.log(this) // 在箭头函数中 this指向定义时的对象,而不是调用时的对象
//         }, 1000)
//     })
// })

// 类
// function People(name, age) {
//     console.log(this)
//     this.name = name
//     this.age = age
// }
// let p1 = new People('zhaosy', 22)
// console.log(p1)

// 箭头函数不能作为构造函数使用
// let People = (name, age) => {
//     this.name = name
//     this.age = age
// }
// let p1 = new People('zhaosy', 22)
// console.log(p1)

// let foo = function () {
//     console.log(arguments)
// }
// foo(1, 2, 3)

// let foo = () => {
//     console.log(arguments)
// }
// foo(1, 2, 3)

// 但是用rest运算符可以代替
// let foo = (...args) => {
//     console.log(args)
// }
// foo(1, 2, 3)