/*
    TS运算符
    运算符用于执行程序代码运算，会针对一个以上操作数项目来进行运算
    TS运算符包括：
        算术运算符
        逻辑运算符
        关系运算符
        按位运算符
        赋值运算符
        三元运算符/条件运算符
        字符串运算符
        类型运算符
*/
/*
    算术运算符
    + - * / % ++ --
*/
/*
    关系运算符
    结果都为true或false
    == != > < >= <=
*/
/*
    逻辑运算符
    用于测定变量或值之间的逻辑
    and &&  or ||  not ！
*/
/*
    短路运算符
    && 和 ||
    就是说如果 && 前面的是 falsy 或者 || 前面的是 truly 就不进行后面的判定了
    它的返回值是 truthy 或 falsy 值
    falsy: false  0  -0  0n  ""  null  undefined  NaN
    truthy: 除了 falsy 之外的皆为 truthy 值
*/
// 1. &&: 返回 前面 的那个 falsy 值
console.log(0 && 1); // 0
console.log(4 > 10 && 1); // false
console.log(undefined && 1); // undefined
console.log(null && 1); // null
// 2. &&: 返回 后面 的那个 truthy 值
console.log(-1 && 1); // 1          -1&&1 是truthy
console.log(-1 && 5); // 5
console.log(1 && 3 > 1); // true
console.log(1 && 10); // 10
console.log(1 && Infinity);
// 3. &&: 返回后面的那个 falsy 值
// const bigIntA = 0n;
console.log(1 && NaN); // NaN
// console.log(1 && bigIntA);
/*
    位运算符
    位操作是程序设计中对位模式按位或二进制数的一元和二元操作
    AND & OR | 取反 ~ 异或 ^ 左移 << 右移 >> 无符号右移 >>>
*/
var a1 = 2;
var b1 = 3;
console.log("---------位操作符----------");
console.log(a1, b1, a1 & b1); // 2  0010 & 0011 = 0010
console.log(a1, b1, a1 | b1); // 3  0010 | 0011 = 0011
console.log(a1, b1, ~b1); // 取反 -4  ~0011 = 1100
console.log(a1, b1, a1 ^ b1); // 1  0010 ^ 0011 = 0001
console.log(a1, b1, a1 << b1); // 16  0010 << 3 = 10000
console.log(a1, b1, a1 >> b1); // 0  0010 >> 3 = 0000 ()
console.log(a1, b1, a1 >>> b1); // 0  0010 >>> 3 = 0000  
// 右移 符号位不变，左边补上符号位
console.log(-15 >> 2); // -4  对负数的位运算是对负数的补码运算，补码等于反码加一  
// -15 原码 10001111 补码 11110001 右移后补码 11111100 补码减一取反 11111011 -> 10000100 -> -4
// 无符号位右移 忽略了符号位扩展，0补最高位 只对32位和64位的值有意义
console.log(-2 >>> 3); // 536870911 就是 1 1111 1111 1111 1111 1111 1111 1111   -2 原码 -0010 补码 -1110  32位
/*
    赋值运算符
    = += -= *= /=
*/
/*
    三元运算符
    condition ? trueRet : falseRet
*/
/*
    类型运算符
    1. typeof : “number”、“string”、“boolean”、“object”、“function”、“undefined”
    2. instanceof : 在原型链中寻找
*/
/*
    其他运算符
    负号运算符 -
    字符串运算符：连接运算符 +
*/ 
