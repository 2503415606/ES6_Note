// 函数参数的默认值
// 参数的默认值一定要放在参数的最后面 实参和形参是通过顺序一一对应的
// function foo(x, y = 'world') {
//     console.log(x, y);
// }
// foo('hello')
// foo('hello', 0)

// 与解构赋值相结合使用
// function foo({ x, y = 5 }) {
//     console.log(x, y)
// }
// foo({
//     x: 1,
//     // y: 2
// })

// function ajax(url, {
//     body = '',
//     method = 'GET',
//     header = {}
// } = {}) {
//     console.log(method)
// }
// ajax('http://www.baidu.com', {
//     // method: 'POST'
// })

// function.length 返回函数没有默认值参数的个数
// function foo(x, y, z = 1) {
//     console.log(x, y, z)
// }
// console.log(foo.length)

// 有单独的作用域 若在作用域里有定义值 则使用作用域内的值 否则使用全局的值
// let x = 1
// function foo(x, y = x) {
//     console.log(y)
// }
// foo(2)

// let x = 1
// function foo(y = x) {
//     let x = 2
//     console.log(y)
// }
// foo()

// function foo(y = x) {
//     let x = 2
//     console.log(y)
// }
// foo()

// 函数的name属性
// function foo() { }
// console.log(foo.name);
// console.log((new Function).name); // anonymous 匿名的意思

//bind() 改变this的指向
// function foo(x, y) {
//     console.log(this, x, y)
// }
// foo.bind({ uname: 'zhao' })(2, 3)
// console.log(foo.bind({}).name)
// console.log((function () { }).bind({}).name)