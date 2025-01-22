// var str = 'hi';
// var a = 1;
// var b = {
//     name: 'suyeon',
// };
// console.log(str);
// console.log(a);
// console.log(b);

function jsPrint(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}

jsPrint(1, 2);
console.log('------');
jsPrint(1, 2, 3);
console.log('------');
jsPrint(1, 2, 3, 4, 5, 6);
jsPrint(1, 2, '3', 4, 5, 6);

function addSomething(a, b) {
  return a + b; //number, string
}

// 3-2.
function sum(...nums) {
  let sum = 0;
  for (let num of nums) {
    sum += num;
  }
  return sum;
}

console.log(sum(1, 2, 3, 4, 10)); // 20
