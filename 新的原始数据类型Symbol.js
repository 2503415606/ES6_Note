// Symbol 象征的意思 独一无二
// let s1 = Symbol()
// let s2 = Symbol()
// console.log(s1)
// console.log(s2)
// console.log(s1 === s2)

// let s1 = Symbol('foo')
// let s2 = Symbol('foo')
// console.log(s1)
// console.log(s2)
// console.log(s1 === s2) //false

// const obj = {
//     name: 'zhaosy',
//     toString() { return this.name }
// }
// let s = Symbol(obj)
// console.log(s)

// let s = Symbol('foo')
// s.name = 'zhaosy'
// console.log(s)
// console.log(s.description)

// let s1 = Symbol.for('foo')
// let s2 = Symbol.for('foo')
// console.log(s1 === s2) // true

// Symbol.keyFor 会去找全局中是否有登记的
// const s1 = Symbol('foo') // 没有定义在全局
// console.log(Symbol.keyFor(s1))
// const s2 = Symbol.for('foo') // 定义在全局
// console.log(Symbol.keyFor(s2))

// Symbol的应用场景
// 如有相同名字
// const grade = {
//     张三: { address: 'xxx', tel: '111' },
//     李四: { address: 'yyy', tel: '222' },
//     张三: { address: 'zzz', tel: '333' }
// }
// console.log(grade) // 只输出两个名字 后定义的把前面的覆盖

// const stu1 = 'lisi'
// const stu2 = 'lisi'
// const grade = {
//     [stu1]: { address: 'yyy', tel: '222' },
//     [stu2]: { address: 'zzz', tel: '333' }
// }
// console.log(grade) // 只输出一个

// 用Symbol解决
// const stu1 = Symbol('lisi')
// const stu2 = Symbol('lisi')
// const grade = {
//     [stu1]: { address: 'yyy', tel: '222' },
//     [stu2]: { address: 'zzz', tel: '333' }
// }
// console.log(grade)
// // 获取想要的lisi信息
// console.log(grade[stu1])
// console.log(grade[stu2])

// 可以把属性变成私有属性 大部分方法都遍历不到 一定程度上实现隐藏
// const sym = Symbol('zdnf')
// class User {
//     constructor(name) {
//         this.name = name
//         this[sym] = 'zsdx'
//     }
//     getName() {
//         return this.name + ' ' + this[sym]
//     }
// }
// const user = new User('zhaosy')
// console.log(user.getName())

// for (let key in user) {
//     console.log(key) // 无法遍历出Symbol属性
// }

// for (let key of Object.keys(user)) {
//     console.log(key) // 无法遍历出Symbol属性
// }

// for (let key of Object.getOwnPropertySymbols(user)) {
//     console.log(key) // 只能取到Symbol
// }

// for (let key of Reflect.ownKeys(user)) {
//     console.log(key) // 都可以取到
// }

// 用Symbol消除魔术字符串 如下的两个'Triangle'字符串在代码中多次出现会出现耦合 称为魔术字符串
// function getArea(shape) {
//     let area = 0
//     switch (shape) {
//         case 'Triangle':
//             area = 1
//             break;

//         case 'Circle':
//             area = 2
//             break;
//     }
//     return area
// }
// console.log(getArea('Triangle'))

// const shapeType = {
//     triangle: 'Triangle',
//     circle: 'Circle'
// }
// function getArea(shape) {
//     let area = 0
//     switch (shape) {
//         case shapeType.triangle:
//             area = 1
//             break;

//         case shapeType.circle:
//             area = 2
//             break;
//     }
//     return area
// }
// console.log(getArea(shapeType.triangle))
// console.log(getArea(shapeType.circle))

// const shapeType = {
//     triangle: Symbol(),
//     circle: Symbol()
// }
// function getArea(shape) {
//     let area = 0
//     switch (shape) {
//         case shapeType.triangle:
//             area = 1
//             break;

//         case shapeType.circle:
//             area = 2
//             break;
//     }
//     return area
// }
// console.log(getArea(shapeType.triangle))
// console.log(getArea(shapeType.circle))