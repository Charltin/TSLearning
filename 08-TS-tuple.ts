/*
    元组
    数组中存储的元素一般是相同的，如果储存的元素不同，就需要用到元组
*/

// 1. 声明和初始化

// 声明并初始化
var myTuple1 = [1, "Merry Xmas"];

// 声明空的元组 然后初始化
var myTuple2 = [];
myTuple2[0] = 2;
myTuple2[1] = "圣诞结";
// console.log("声明空的元组 然后初始化: " + myTuple2);

// 2. 访问元组 利用index访问元组
// console.log("利用index访问元组: " + myTuple2[1]);

// 3. 元组运算
// push()向元组添加元素，添加在最后  pop()移除元组中的最后一个元素并返回  这两种方法都会改变原数组
var pop1 = myTuple1.pop()
// console.log("移除元组中的最后一个元素并返回: " + pop1);
myTuple1.push("九三")
// 元组是可变的，这说明我们可以对元组进行更新操作
// console.log("元组更新后变成了: " + myTuple1);

// 4. 解构元组 可以把元组赋值给变量
var[Elem1, Elem2] = myTuple1
console.log("第一个元素: " + Elem1);
console.log("第二个元素: " + Elem2);
