// 对数组的解构赋值
// let [a, b, c] = [1, 2, 3]
// console.log(a, b, c)

// let [a, b, c] = [1, 2, [3, 4]]
// console.log(a, b, c)

// let [a, b, [c, d]] = [1, 2, [3, 4]]
// console.log(a, b, c, d)

// let [a, b, [c]] = [1, 2, [3, 4]]
// console.log(a, b, c)

// 有惰性 如果传过去有值 就以传过去的为准 如果没传过去值 则以默认值为准
// let [a, b, c, d = 6] = [1, 2, 3, 4]
// console.log(a, b, c, d)

// let [a, b, c, d = 6] = [1, 2, 3]
// console.log(a, b, c, d)

// 对对象的解构赋值
// let user = {
//     uname: 'zhaoshiyuan',
//     age: 22
// }

// let uname = user.uname
// let age = user.age

// 通过key的名称对应,不是通过顺序对应
// let { uname, age } = user
// let { age, uname } = user
// 如果起了别名,就要用别名
// let { uname: unames, age: uage } = user

// console.log(unames, uage)

// 字符串的解构,可以把字符串的解构理解成数组的解构
// let str = 'nihao'
// let [a, b, c, d, e] = str

// console.log(a, b, c, d, e)

// 使用场景
// 默认值的应用
// let [a, b, c = 8] = [4, 5]
// console.log(a, b, c)
// let [a, b, c = 8] = [4, 5, 6]
// console.log(a, b, c)

// let { uname, age = 18 } = {
//     uname: 'zhaosy',
// age: 22
// }
// console.log(uname, age)

// 惰性体现
// function foo() {
//     console.log(123)
// }

// let [a = foo()] = [1]
// let [a = foo()] = []

// 对函数参数的解构赋值
// function foo([a, b, c]) {
//     console.log(a, b, c)
// }
// let arr = [1, 2, 3]
// foo(arr)

// 对对象参数的解构赋值
// function foo({ uname, age, school = 'zdnf' }) {
//     console.log(uname, age, school)
// }
// let obj = {
//     uname: 'zhaosy',
//     age: 22
// }
// foo(obj)

// 对返回值的解构
// function foo() {
//     let obj = {
//         uname: 'zhaosy',
//         age: 22,
//         school: 'zdnf'
//     }
//     return obj
// }
// let { uname, age, school } = foo()
// console.log(uname, age, school)

// 提取JSON数据
// let json = '{ "a": "hello", "b": "world" }'
// let { a, b } = JSON.parse(json)
// console.log(a, b)

//将数据转化成JSON格式
// let obj = {
//     uname: 'zhaosy',
//     age: 22
// }
// console.log(obj)

// let json = JSON.stringify(obj)
// console.log(json)
// console.log(typeof (json))