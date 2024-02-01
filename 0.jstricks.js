// 1. 구조분해 할당을 이용한 변수 swap
// ES6의 구조분해 할당 문법을 사용하여 두 변수를 swap할수 있다
let a = 5, b = 10;
[a, b] = [b, a];
// console.log(a, b);

// 2. 배열 생성으로 루프 제거하기
// 보통 단순히 범위 루프를 돌고 싶다면 반복문 코드 작성
let sum = 0;
for (let i = 5; i < 10; i++) {
  sum += i;
}
// console.log(sum);

// 만약 범위 루프를 함수형 프로그래밍 방식으로 작성하고 싶다면 배열 생성해서 사용할 수 있다.
//Array.from()은 JavaScript에서 배열 형태의 객체를 생성하는 메서드입니다. 이 메서드는 유사 배열 객체나 이터러블 객체를 배열로 변환할 수 있습니다.
const sum2 = Array
  .from(new Array(5), (_, k) => k + 5)
  .reduce((acc, cur) => acc+ cur, 0);
  // console.log("sum2: " + sum2);

// 3. 배열 내 같은 요소 제거하기
// set을 사용한다.
const names = ['John', 'Paul', 'George', 'Ringo', 'John'];
const uniqueNamesWithArrayFrom = Array.from(new Set(names));
const uniqueNamesWithSpread = [...new Set(names)];
// console.log(uniqueNamesWithSpread);

// 4. Spread 연산자를 이용한 객체 병합
// 두 객체를 별도 변수에 합쳐줄 수 있다.

const person = { 
  name: 'JunShinYong', 
  age: 25,
  major: 'business',
  givenName: 'ShinYong'};

const company = {
  companyName: 'Kakao',
  address: 'seoul'
}

const employee = {...person, ...company};
// console.log(employee);

//------------------

// 5. && 와 || 는 조건문 외에서도 활용될 수 있다.

// || 
// 기본값을 넣어주고 싶을때 사용가능
// participantName이 0, undefined, 빈문자열, null일 경우 'Guest'로 대체
let participantName = undefined;
const user = participantName || 'Guest';
// console.log(user);

