/* 
    类型断言
    类型断言可以用来手动指定一个值的类型，即允许变量从一种类型更改为另一种类型
*/

/* 
    语法格式 syntax
    1. <类型> 值
    2. 值 as 类型
*/

var strA = "1";
var strB: number = <number>(<any>strA);
console.log(typeof strB, typeof strA); // string string
