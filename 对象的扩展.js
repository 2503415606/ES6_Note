// 属性简介表示法
// value是变量 想要key是变量 则要加一个[]
// let uname = 'zhaosy'
// let age = 22
// let s = 'school'
// let obj = {
//     // name: uname,
//     // age: age
//     // 如果key和value是一样的 可以简写
//     name: uname,
//     age,
//     [s]: 'zdnf',
//     // study: function () {
//     //     console.log(this.name + '正在学习')
//     // }
//     // 对象里面的方法不要用箭头函数
//     study() {
//         console.log(this.name + '正在学习')
//     }
// }
// console.log(obj)
// obj.study();

// Object.is() 用来判断两个值是否严格相等
// console.log(Object.is(2, '2'))
// console.log(Object.is(NaN, NaN))
// console.log(Object.is(+0, -0))

// 并不是长得一样就相等,地址不同 对于对象的比较 比较的是他们的内存地址
// let obj1 = { // new Object()
//     name: 'zhaosy',
//     age: 22
// }

// let obj2 = {
//     name: 'zhaosy',
//     age: 22
// }
// let obj2 = obj1
// console.log(obj1 == obj2)
// console.log(Object.is(obj1, obj2))

// 扩展运算符与Object.assign()
// let x = {
//     a: 3,
//     b: 4
// }
// let y = { ...x }
// let y = x
// let y = {}
// Object.assign(y, x) // 合并对象
// console.log(y)
// console.log(Object.is(x, y));
// let y = {
//     c: 5
// }
// Object.assign(x, y)
// console.log(x)
// let y = {
//     c: 5,
//     a: 6
// }
// 合并时碰到相同属性 后面的把前面的覆盖掉
// Object.assign(y, x)
// console.log(y)

// in判断对象里面是否包含某个属性
// console.log('a' in x);
// console.log('aa' in x);

// 判断数组下标是否有值
// let arr = [1, 2, 3]
// console.log(2 in arr);

// 如何遍历对象
// let obj = {
//     name: 'zhaosy',
//     age: 22,
//     school: 'zdnf'
// }
// for (let key in obj) {
//     console.log(key, obj[key])
// }

// Object.keys(obj).forEach(key => {
//     console.log(key, obj[key])
// })

// Object.getOwnPropertyNames(obj).forEach(key => {
//     console.log(key, obj[key])
// })

// Reflect.ownKeys(obj).forEach(key => {
//     console.log(key, obj[key])
// })