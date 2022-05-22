// for循环
// let arr = [1, 2, 3];

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

// forEach 里面不能使用 break 和 continue
// arr.forEach(function(elem, index, array){})
// arr.forEach(function (elem, index, array) {
//     console.log(elem, index, array)
// })

// map方法 map的返回值会组成一个新的数组 不会改变原有数组
// arr.map(function (value) {
//     console.log(value)
// })
// let result = arr.map(function (value) {
//     value += 1
//     return value
// })
// console.log(arr, result)

// filter 返回筛选出符合条件的新的数组
// arr.filter(function (value) {
//     console.log(value)
// })

// let result = arr.filter(function (value) {
//     return value == 2
// })
// console.log(arr, result)

// some 返回布尔值 判断是否有元素符合func条件
//every 返回布尔值 判断是否所有元素都符合func条件
// arr.some(function (value) {
//     console.log(value)
// })
// let result = arr.some(function (value) {
//     return value == 2
// })
// console.log(arr, result)

// arr.every(function (value, index, array) {
//     console.log(value, index, array)
// })
// let result = arr.every(function (value) {
//     return value == 2
// })
// console.log(arr, result)

// var arr1 = [1000, 2000, 3000]
// var flag = arr1.every(function (value, index, array) {
//     console.log(value + "===" + index + "====" + array) //1000===0====1000,2000,3000
//     return value > 2000;//数组中的每个元素的值都要大于2000的情况,最后才返回true
// })
// console.log(flag)   //false

// reduce(function(prev, cur, index, array){}, 初始值) 接受一个函数作为累加器
// 求数组里的值的和
// let arr = [1, 2, 3, 2, 4, 5, 5, 6]
// let sum = arr.reduce(function (prev, cur) {
//     return prev + cur
// }, 0)
// console.log(sum)
// 求数组里的最大值
// let max = arr.reduce(function (prev, cur) {
//     return Math.max(prev, cur)
// }, 0)
// console.log(max)

// 数组去重
// let arr1 = [1, 2, 3, 2, 2, 4]

// let result = arr1.reduce(function (prev, cur) {
//     prev.indexOf(cur) == -1 && prev.push(cur)
//     return prev
// }, [])
// console.log(result)

// for x in y 不仅会遍历数组的值,还会把数组的方法给遍历出来 所以最好不要用for in遍历数组
// Array.prototype.foo = function () {
//     console.log('foo')
// }
// for (let index in arr) {
//     console.log(index, arr[index])
// }

// find 返回第一个通过测试的元素
// let res = arr1.find(function (value) {
//     return value == 2
// })
// console.log(arr, res);

// findIndex 返回第一个通过测试的元素的索引
// let res = arr1.findIndex(function (value) {
//     return value == 2
// })
// console.log(arr, res);

// for of // values() 得到内容
// for (let item of arr1) {
//     console.log(item)
// }

// for (let item of arr1.values()) {
//     console.log(item);
// }

// keys() 得到索引
// for (let item of arr1.keys()) {
//     console.log(item);
// }

// entries() 得到内容和索引
// for (let [index, item] of arr1.entries()) {
//     console.log(index, item)
// }