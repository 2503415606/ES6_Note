// 类
// function People(name, age) {
//     // 实例属性
//     this.name = name
//     this.age = age
//     // this.showName = function () {
//     //     console.log('我的名字是' + this.name)
//     // } // new对象时方法这样定义并不好
//     People.count++
// }
// 静态属性 定义在类下的
// People.count = 0

// // 静态方法 静态方法和实例化对象没有关系
// People.getCount = function () {
//     console.log(this); // 并不会指向对象 指向的是当前的构造函数
//     // 如
//     console.log(this.age); // undefined
//     console.log('当前共有' + People.count + '个人');
// }

// 实例方法
// 方法应该定义在原型下面 原型就像个模子 只要在这个类下的对象 都包含这个原型下的方法
// People.prototype.showName = function () {
//     console.log('我的名字是' + this.name)
// }
// let p1 = new People('zhaosy', 22)
// console.log(p1)
// p1.showName()
// let p2 = new People('zhangsan', 18)
// console.log(p2)
// p2.showName()
// console.log(People.count)
// People.getCount()

// let str = new String('zhaosy')
// console.log(str)

// let arr = new Array(1, 2, 3)
// console.log(arr)

// let obj = new Object()
// obj.name = 'zhaosy'
// console.log(obj)

// 静态方法 如Math
// console.log(Math.max(4, 7, 3));
// console.log(Math.random());

// 继承
// 父类
// function Animal(name) {
//     this.name = name
// }
// Animal.prototype.showName = function () {
//     console.log('这个动物的名字是: ' + this.name);
// }

// 子类
// function Dog(name, color) {
//     // 如何继承父类的属性和方法
//     // 构造函数继承
//     Animal.call(this, name) // 继承属性 并不能继承方法 把它和下面的原型继承组合 变成组合式继承 就可以解决问题
//     this.color = color
// }

// 继承方法 需要把子类的原型指向父类的实例化对象 原型继承
// Dog.prototype = new Animal()
// Dog.prototype.constructor = Dog

// let dog1 = new Dog('wangcai', 'red')
// console.log(dog1);
// dog1.showName()

// es6里的类的继承
// class People {
//     constructor(name, age) { // 当碰到一些业务逻辑时就操作不了
//         this.name = name
//         this.age = age
//         this._sex = -1
//     }
//     // get 和 set 在获取或者设置属性时有业务逻辑操作时使用
//     // 比如只有在p1.sex赋值为0和1时 才能获取'male'和'female'
//     // get 只读 在外面不能赋值
//     get sex() { // 属性
//         if (this._sex === 0) {
//             return 'female'
//         } else if (this._sex === 1) {
//             return 'male'
//         } else {
//             return 'error'
//         }
//     }
//     // set 如果set sex(val){this.sex = val} 会一直循环 所以要设置多一个 _sex
//     set sex(val) {
//         if (val === 0 || val === 1) {
//             this._sex = val
//         }
//     }
//     showName() {
//         console.log(this.name);
//     }
//     // es6 定义静态属性 静态方法
//     // 静态方法
//     static getCount() {
//         return 5
//     }
// }
// // 静态属性
// People.count = 9
// console.log(typeof People)
// console.log(People.count)

// let p1 = new People('zhaosy', 22)
// console.log(p1)
// p1.sex = 0
// console.log(p1.sex)
// // console.log(p1.getCount()) // 报错
// console.log(People.getCount())

// class Coder extends People {
//     constructor(name, age, company) {
//         super(name, age)
//         this.company = company
//     }
//     showCompany() {
//         console.log(this.company)
//     }
// }

// let coder1 = new Coder('zhaosy', 22, 'HuaWei')
// console.log(coder1)
// coder1.showName()
// coder1.showCompany()
// coder1.sex = 1
// console.log(coder1.sex)
// console.log(Coder.getCount())