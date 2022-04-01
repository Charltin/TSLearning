/* 
    TypeScript 是一种给 JavaScript 添加特性的语言扩展（JS的超集）
    包括：
    1. 类型批注和编译时类型检查
    2. 类型推断
    3. 类型擦除
    4. 接口
    5. 枚举
    6. Mixin
    7. 泛型编程 Array<number> = [1, 2, 3]
    8. 名字空间 
    9. 元组
    10. Await 
*/

/* 
    以下功能是从 ECMA2015 反向移植过来的
    1. 类
    2. 模块
    3. lambda 函数的箭头语法
    4. 可选参数以及默认参数 
*/

/* 
    TS常用编译参数
    --help 显示帮助信息
    --module 载入扩展模块
    --target 设置 ECMA 版本
    --declaration 额外生一个 .d.ts 扩展名的文件
    --removeComments 删除文件的注释
    --out 编译多个文件并合并到一个输出的文件
    --sourcemap 生成一个 sourcemap（.map） 文件，它是存储源代码与编译代码对应映射的信息文件
    --module nolmplicitAny 在表达式和声明上有隐含的any类型时报错
    --watch 在监视模式下运行编译器。会监视输出文件，在他们改变的时候重新编译 
*/

var message: string | number;
message = "hello TS";
message = 10;
console.log(message);
