// 3-1
function sum1(x: number, y: number) {
  return x + y;
}

// 두 개의 수를 매개 변수로 받고 합을 console.log 로 출력하는 함수 sum1 만들기
sum1(5, 11); // 테스트는 이렇게 하기!
console.log(sum1(5, 11));

// 3-2
function sum2(...arr: number[]) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum;
}

// 매개 변수로 여러 개의 수를 받고 전달된 값을 모두 더하는 함수 sum2
// 모두 합산한 값을 "return" 합니다.
// Hint: 전개 연산자 이용하기

// 테스트는 이렇게!
console.log(sum2(1, 2, 3, 4, 10)); // 20

// 3-3 generic
function arrElement<T>(arr: T[], i: number) {
  if (i >= arr.length) return false;
  else return arr[i];
}

console.log(arrElement<string>(['a'], 0)); // a
console.log(arrElement<string>(['a'], 1)); //false
