// Map 对象也可以当key 键值对的形式 key是唯一的
// let m = new Map()
// let obj = {
//     name: 'zhaosy'
// }
// m.set(obj, 'zdnf')

// console.log(m)
// // 获取值
// console.log(m.get(obj))
// // 如果只是长得一样但不是同一个 删除会失败
// m.delete(obj)
// console.log(m)
// console.log(m.has(obj))

// let map = new Map([
//     ['name', 'zhaosy'],
//     ['age', 22]
// ])
// console.log(map)
// console.log(map.size)
// console.log(map.has('age'))
// map.set('name', 'lisi')
// console.log(map)
// map.delete('name')
// console.log(map)

// 遍历
// let map = new Map([
//     ['name', 'zhaosy'],
//     ['age', 22]
// ])
// map.forEach((value, key) => console.log(value, key))

// for (let [key, value] of map) {
//     console.log(key, value)
// }

// for (let key of map.keys()) {
//     console.log(key)
// }

// for (let val of map.values()) {
//     console.log(val)
// }

// for (let value of map.entries()) {
//     console.log(value)
// }

// Map的应用场景和Object差不多但有些许差别 Map更加灵活

// WeaKmap 和WeakSet差不多 但是这里的key只能是引用数据类型 不支持clear() size 遍历 弱引用
// let vm = new WeakMap()
// vm.set([1], 2)
// vm.set({
//     name: 'zhaosy'
// }, 'es')
// console.log(vm)

// 有助于防止内存泄漏
// let vm = new WeakMap()
// let elem = document.getElementsByTagName('button')
// vm.set(elem, 'info')
// console.log(vm.get(elem))