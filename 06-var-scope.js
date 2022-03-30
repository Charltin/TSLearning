/*
    TS的变量作用域
    1. 全局作用域：全局变量定义在程序结构的外部，你可以在你代码的任何位置使用它
    2. 类作用域：这个变量也可以被称为字段。类变量生命在一个类里面，但在类的方法外面。该变量可以通过类的对象来访问。
       类变量也可以是静态的，静态的变量可以直接通过类名直接访问。
    3. 局部作用域：局部变量，局部变量只能在声明它的一个代码块中使用。
*/
var global_num = 12; // 全局变量
var Numbers = /** @class */ (function () {
    function Numbers() {
        this.num_val = 13; // 实例变量
    }
    Numbers.prototype.storeNum = function () {
        var local_num = 14; // 局部变量
        console.log(local_num);
    };
    Numbers.sval = 10; // 静态变量
    return Numbers;
}());
console.log("全局变量为: " + global_num); // 12
console.log(Numbers.sval); // 静态变量 类名.静态变量名 10
var obj1 = new Numbers();
console.log("实例变量: " + obj1.num_val); // 13
obj1.storeNum();
