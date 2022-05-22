// Set里面的成员值是唯一的
// let s = new Set()
// console.log(s)

// let s = new Set([1, 2, 3, 2])
// console.log(s) // 只会输出一个2
// Set常见的方法
// s.add('zhaosy').add('zdnf')
// s.delete(2)
// s.clear()
// console.log(s.has('zhaosy'))
// console.log(s.size)
// console.log(s)

// 遍历
// s.forEach(item => console.log(item))
// for (let item of s) {
//     console.log(item)
// }
// for (let item of s.keys()) {
//     console.log(item)
// }
// for (let item of s.values()) {
//     console.log(item)
// }
// for (let item of s.entries()) {
//     console.log(item[0], item[1])
// }

// 应用场景
// 数组去重
// let arr = [1, 2, 3, 4, 2, 3]
// let s = new Set(arr)
// console.log(s)

// 合并去重
// let arr1 = [1, 2, 3, 4]
// let arr2 = [2, 3, 4, 5, 6]
// let s = new Set([...arr1, ...arr2])
// console.log(s)
// console.log([...s])
// console.log(Array.from(s))

// 交集
// let arr1 = [1, 2, 3, 4]
// let arr2 = [2, 3, 4, 5, 6]
// let s1 = new Set(arr1)
// let s2 = new Set(arr2)
// let res = new Set(arr1.filter(item => s2.has(item)))
// console.log(Array.from(res))

// 差集
// let arr1 = [1, 2, 3, 4]
// let arr2 = [2, 3, 4, 5, 6]
// let s1 = new Set(arr1)
// let s2 = new Set(arr2)
// let s3 = new Set(arr1.filter(item => !s2.has(item)))
// let s4 = new Set(arr2.filter(item => !s1.has(item)))
// let arr3 = Array.from(s3)
// let arr4 = Array.from(s4)
// let res = [...arr3, ...arr4]
// console.log(arr3)
// console.log(arr4)
// console.log(res)

// WeakSet 只能够存储对象 不能进行遍历 里面的对象是弱引用
// let ws = new WeakSet()
// const obj1 = {
//     name: 'zhaosy'
// }
// const obj2 = {
//     age: 22
// }
// ws.add(obj1)
// ws.add(obj2)
// 如果只是长得一样但不是同一个 删除会失败
// ws.delete(obj1)
// console.log(ws)