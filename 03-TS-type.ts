/* 
    TypeScript 包括以下数据类型
    1. any 任意类型
    2. number 数字类型
    3. string 字符串类型
    4. boolean 表示逻辑值：true 和 false
    5. array 数组类型
    6. 已知元素数量和类型的数组——元组类型
    7. enum 枚举类型 数值的集合
    8. void 返回值类型为空
    9. null 表示对象值缺失 
    10. undefined 初始化变量为一个未定义的值
        null和undefined是其他任何类型的子类型，可以赋值给其他类型，如数字类型，赋值后的类型会变成null或undefined类型（被污染）。
        在typescript中启用--strictNullChecks（严格的空校验），就可以是的null和undefined只能被赋值给void或本身对应的类型。
    11. never 表示从来不会出现，没有的值（比如用来报错的函数的返回值）
    *** typescript 和 JavaScript 都没有整数类型 ***
 */

// any 相当于没有限制，和js的变量一样，不推荐这样写
let a: any;
a = 10;
a = "string";
a = true;
a = [];

// null和undefined
let x: number;
let y = null; 
let z = undefined;
x = y; // 污染了其他类型
z = y; // null和undefined可以互相赋值
// console.log("x : " + x); // x : null

// never
// never是任何类型的子类型，代表从不会出现的值。所以never类型的变量只能被never类型所赋值。
// 用处：抛出异常或者无法执行到终止点
let k: number;
let l: never;

/* 
    k = (() => {
    throw new Error("k throw the error");
    })(); // 一个立即执行函数，执行结果为空，可以赋值给number类型

    l = (() => {
        throw new Error("k throw the error");
    })(); 
*/
function loop(): never { // 当函数无法被执行到终止点
  while (true) {}
}

// number
let num1: number; // 方式1
num1 = 10;
let num2 = 20; // 方式2
let num3: number = 30; // 方式3
// num1 = true 报错

// string
let str1 = "hi";
let str2: string;
str2 = "hello";
let str3 = `今天是${num1}月${num2}日`;

// boolean
let flag: boolean = true;

// Array
let arr1: number[];
arr1 = [1, 2, 3];

let arr2: [string, number]; // 这个其实是元组 固定了两个长度 固定了每一个元素的类型
arr2 = ["a", 2];

let arr3: Array<number> = [1, 2, 3, 4]; // 数组泛型

// 元组
let xArr: [string, number, string]; // 固定了两个长度 固定了每一个元素的类型
xArr = ["我", 5, "岁"];

// 枚举
enum Color {
  red,
  green,
  blue,
}
let c: Color = Color.blue;
console.log("c: " + c); // c: 2

enum Gender {
    male,
    female
}
let d = Gender.female // d = 1
console.log(Gender.female); // 1


// void
function hello():void {
    alert("'hello, I'm charltin") // 这个函数没有返回值，所以是void类型
}