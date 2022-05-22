// Object.assign() 在对象里嵌套了复杂的数据类型时是浅拷贝
// let target = {
//     a: {
//         b: {
//             c: 1
//         },
//         e: 4,
//         f: 5,
//         g: 6
//     }
// }
// let source = {
//     a: {
//         b: {
//             c: 1
//         },
//         e: 2,
//         f: 3,
//     }
// }
// Object.assign(target, source)
// console.log(target) // g 消失了
// console.log(source)
// 深拷贝
// let a = 1
// let b = a
// a = 2
// console.log(a)
// console.log(b)

// 浅拷贝
// let obj1 = {
//     name: 'zhaosy',
//     age: 22
// }
// let obj2 = obj1
// obj1.age = 18
// console.log(obj1)
// console.log(obj2)

// 使用JSON.stringify()和JSON.parse()实现深拷贝
// 对于对象里面有方法的不适用
// let obj1 = {
//     name: 'zhaosy',
//     age: 22
// }
// let str = JSON.stringify(obj1)
// let obj2 = JSON.parse(str)
// obj1.age = 18
// console.log(obj1)
// console.log(obj2)

// 自己实现深拷贝函数
// 判断传入的数据是什么类型的
// let checkType = data => {
//     // typeof判断数组显示的是对象类型所以不适用这里
//     // 经常使用toString()方法去判断数据类型
//     return Object.prototype.toString.call(data).slice(8, -1)
// }
// let deepClone = target => {
//     let targetType = checkType(target)
//     let result
//     if (targetType === 'Object') {
//         result = {}
//     } else if (targetType === 'Array') {
//         result = []
//     } else {
//         return target
//     }
//     for (let i in target) {
//         // 对于对象来说 取出里面的值有两种方法 obj.key 和 obj['key'] 因此可以用下面这种方法
//         let value = target[i]
//         let valueType = checkType(value)
//         if (valueType === 'Object' || valueType === 'Array') {
//             result[i] = deepClone(value)
//         } else {
//             result[i] = value
//         }
//     }
//     return result
// }
// let arr1 = [1, 2, { age: 18 }]
// let arr2 = deepClone(arr1)
// arr2[2].age = 19
// console.log(arr1)
// console.log(arr2)

// let obj1 = {
//     name: 'zhaosy',
//     hobby: ['coding', 'eating']
// }
// let obj2 = deepClone(obj1)
// obj1.hobby[1] = 'drinking'
// console.log(obj1)
// console.log(obj2)