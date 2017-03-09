/**
 * Created by liliwen on 2017/1/2.
 */
'use strict';
require('../css/main.scss');

let words = 'hello world!!!';

// console.log(words);
// console.log(3);


//单例测试
import person from './singleton-test/a';
import './singleton-test/b';

person.count++;

console.log('in main.js');
console.log(person.count);

//打印结果
//in b.js=======
//1
//in main.js=======
//2

//result webpack的模块export出来的对象是单例

//count是read only
// import count from './singleton-test/c';
// import'./singleton-test/d';

console.log('in main.js');
console.log(count++);