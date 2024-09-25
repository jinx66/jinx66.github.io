---
title: Javascript • js改变原数组的方法和不改变原数组
date: 2023-06-11 14:07:32
categories:
  - 教程
tags:
  - JavaScript
password: yes
abstract: " "
message: JavaScript是不是最好的编程语言？密码 yes or no 
wrong_pass_message: 抱歉, 这个密码看着不太对, 请再试试.
wrong_hash_message: 抱歉, 这个文章不能被校验, 不过您还是能看看解密后的内容.
---

一、改变原始数组的方法：

1、pop()

pop() 方法移除数组的最后一个元素，并返回该元素。

注意：pop() 方法会改变数组的长度。

pop() 返回它删除的元素：

```javascript
let teams = ["Lakers", "Jazz", "Rockets", "Suns"];
//'Suns'
teams.pop();
```

2、push()

push() 方法向数组末尾添加新项目，并返回新长度。
提示：新的项目将被添加到数组的末尾。
注释：push() 方法会改变数组的长度。
向数组添加一个新项目：

```javascript
let teams = ["Lakers", "Jazz", "Rockets", "Suns"];
//5
teams.push("Warriors");
//(5) ['Lakers', 'Jazz', 'Rockets', 'Suns', 'Warriors']
console.log(teams);
```

3、reverse()

reverse() 方法反转数组中元素的顺序。
注释：reverse() 方法将改变原始数组。

反转数组中元素的顺序：

```javascript
let teams = ["Lakers", "Jazz", "Rockets", "Suns"];
//(4) ['Suns', 'Rockets', 'Jazz', 'Lakers']
teams.reverse();
```

4、shift()

shift() 方法移除数组的第一项。

注释：shift() 方法会改变数组的长度。

注释：shift 方法的返回值是被移除的项目。

注释：shift() 方法会改变原始数组。

删除数组中的第一个项目：

```javascript
let teams = ["Lakers", "Jazz", "Rockets", "Suns"];
//'Lakers'
teams.shift();
```

5、unshift()

unshift() 方法将新项添加到数组的开头，并返回新的长度。

注释：unshift() 方法会改变数组的长度。

提示：如需在数组末尾添加新项，请使用 push()方法。

将新项目添加到数组的开头：

```javascript
let teams = ["Lakers", "Jazz", "Rockets", "Suns"];
//6
teams.unshift("Kings", "Spurs");
//(6) ['Kings', 'Spurs', 'Lakers', 'Jazz', 'Rockets', 'Suns']
console.log(teams);
```

6、sort()

如果调用该方法时没有使用参数，将按字母顺序对数组中的元素进行排序，说得更精确点，是按照字符编码的顺序进行排序。要实现这一点，首先应把数组的元素都转换成字符串（如有必要），以便进行比较。

如果想按照其他标准进行排序，就需要提供比较函数，该函数要比较两个值，然后返回一个用于说明这两个值的相对顺序的数字。比较函数应该具有两个参数 a 和 b，其返回值如下：

若 a 小于 b，在排序后的数组中 a 应该出现在 b 之前，则返回一个小于 0 的值。
若 a 等于 b，则返回 0。
若 a 大于 b，则返回一个大于 0 的值。

```javascript
let points = [40, 100, 1, 5, 25, 10];
//(6) [100, 40, 25, 10, 5, 1]
points.sort((a, b) => {
  return b - a;
});
```

7、splice()

splice() 方法向/从数组添加/删除项目，并返回删除的项目。

注释：splice() 方法会改变原始数组。

```javascript
let teams = ["Lakers", "Jazz", "Rockets", "Suns"];
//['Rockets']
teams.splice(2, 1, "Kings", "Spurs");
//(5) ['Lakers', 'Jazz', 'Kings', 'Spurs', 'Suns']
console.log(teams);
```

二、不改变原始数组的方法：

1、concat()

concat() 方法用于连接两个或多个数组。

concat() 方法不会更改现有数组，而是返回一个新数组，其中包含已连接数组的值。

```javascript
let team1 = ["Lakers", "Jazz", "Rockets", "Suns"];
let team2 = ["Kings", "Spurs"];
//(6) ['Lakers', 'Jazz', 'Rockets', 'Suns', 'Kings', 'Spurs']
team1.concat(team2);
```

2、join()

join() 方法将数组作为字符串返回。

元素将由指定的分隔符分隔。默认分隔符是逗号 (,)。

```javascript
let team = ["Lakers", "Jazz", "Rockets", "Suns"];
//'Lakers,Jazz,Rockets,Suns'
team.join();
//'LakersJazzRocketsSuns'
team.join("");
//'Lakers!Jazz!Rockets!Suns'
team.join("!");
```

3、slice()

slice() 方法以新的数组对象，返回数组中被选中的元素。

slice() 方法选择从给定的 start 参数开始的元素，并在给定的 end 参数处结束，但不包括。

```javascript
let team = ["Lakers", "Jazz", "Rockets", "Suns"];
//(2) ['Jazz', 'Rockets']
team.slice(1, 3);
//(4) ['Lakers', 'Jazz', 'Rockets', 'Suns']
console.log(team);
```

4、JSON.parse(JSON.stringify(arry))

这种方式会重新复制一个数组。也是实现深拷贝的一种方式。

```javascript
let arr = [1, 2, 3];
//(3) [1, 2, 3]
JSON.parse(JSON.stringify(arr));
// false,两个不同的内存引用地址，所以不相等
JSON.parse(JSON.stringify(arr)) == arr;
```

5、map()

map() 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。

map() 方法按照原始数组元素顺序依次处理元素。

注意： map() 不会对空数组进行检测。

注意： map() 不会改变原始数组。

```javascript
let a = [1, 2, 3, 4];
let b = a.map((item) => {
  return item + 1;
});
//(4) [1, 2, 3, 4]
console.log(a);
//(4) [2, 3, 4, 5]
console.log(b);
```

6、some()

some() 方法用于检测数组中的元素是否满足指定条件（函数提供）。

some() 方法会依次执行数组的每个元素：

如果有一个元素满足条件，则表达式返回 true , 剩余的元素不会再执行检测。
如果没有满足条件的元素，则返回 false。
注意： some() 不会对空数组进行检测。

注意： some() 不会改变原始数组。

```javascript
let a = [1, 2, 3, 4];
let d = a.some((item) => {
  return item === 1;
});
//(4) [1, 2, 3, 4]
console.log(a);
// true
console.log(d);
```

7、every()

every() 方法用于检测数组所有元素是否都符合指定条件（通过函数提供）。

every() 方法使用指定函数检测数组中的所有元素：

如果数组中检测到有一个元素不满足，则整个表达式返回 false ，且剩余的元素不会再进行检测。
如果所有元素都满足条件，则返回 true。
注意： every() 不会对空数组进行检测。

注意： every() 不会改变原始数组。

```javascript
let a = [1, 2, 3, 4];
let c = a.every((item) => {
  return item === 1;
});
//(4) [1, 2, 3, 4]
console.log(a);
// false
console.log(c);
```

8、filter()
filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。

注意： filter() 不会对空数组进行检测。

注意： filter() 不会改变原始数组。

```javascript
let a = [1, 2, 3, 4];
let c = a.filter((item) => {
  return item === 1;
});
//(4) [1, 2, 3, 4]
console.log(a);
// [1]
console.log(c);
```
想了想，还是在端午放假的时候浅浅上线一下我的网站吧，pc网页和手机地址都是 https://jinx66.gitee.io/
1.浅浅用喜欢的风格搭建了下，比较简洁没有太酷炫的动画（p1）
2.弄网站第一件事就是把打赏给搞了，谢谢各位老板（p2）
3.弄网站第二件事就是把评论给搞了，但要科学上网才能看评论和发评论（搭了个评论管理服务为的就是能拉人进小黑屋哈哈哈），国内的服务域名没钱备案好吧..（p3）
4.左上角的头像旁边有一个小三角点击切换暗黑模式，如果看的话我的建议是直接暗黑加蓝色主题（p4）
5.app做了浅浅的适配，要配合右下角的悬浮按钮；pc的话没做24寸屏幕以下的适配(应该会错位了但又不是不能看)...（p5）
6.pc网页彩蛋请按f12（应该要看第一行，因为有可能被报错信息刷下去了😅）（p6）
7.v50换右上角歌单，但付费的歌真上不了好吧，怕进局子（p7）
8.没事我还放了抖音链接，文章没什么好看的都是水的哈哈哈哈（p8）
9.懂的都懂（p9）
