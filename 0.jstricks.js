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

// &&
// flag가 true일 경우에만 실행
let flag = true;
const func = () => {
  // console.log('hello');
}
flag && func();

// 객체 병합에도 활용할수 있다.
const makeCompany = (showAddress) => {
  return {
    name: 'Naver',
    ...showAddress && {address: 'busan'}
  }
};

// console.log(makeCompany(true));


// 6. 구조분해 할당 사용하기
// 객체에서 필요한 것만 꺼내 쓰는 것이 좋다.
const personInfo = {
  name: 'JunShinYong',
  age: 25,
  major: 'business',
  givenName: 'ShinYong',
  firstName: 'Jun',
  company: "MorganStanley"
};

const {firstName, givenName} = personInfo;
// console.log(personInfo.firstName, personInfo.givenName)

// 객체 생성시 키 생략하기
// 객체를 생성할 때 프로퍼티 키를 변수 이름으로 생략할 수 있다.
const userName = 'JunShinYong';
const age = 25;
const major = 'business';
const personStatus = {
  userName,
  age,
  major
}

// console.log(personStatus);

// 7. 비구조화 할당 사용하기
// 함수에 객체를 넘길 경우, 필요한 것만 꺼내 쓸 수 있다.
const newCompany = ({name, address, serviceName}) => {
  return {
    name,
    address,
    serviceName
  }
}

// console.log(newCompany({name: 'beansellection', address: 'seoul', serviceName: 'coffee'}));


// 8. 동적 속성 이름
// ES6에 추가된 기능으로 객체의 키를 동적으로 생성할 수 있다.
const nameKey = 'name';
const emailKey = 'email';
const userDetail = {
  [nameKey]: 'JunShinYong',
  [emailKey]: 'jesikah2@naver.com',
}

// console.log(userDetail);

// 9. !! 연산자를 이용하여 Boolean 값으로 바꾸기
// !! 연산자를 이용하여 0, null, 빈문자열, undefined, NaN을 false로 그 외에는 true로 변경할 수 있다.
function check(variable) {
  if(!!variable) {
    console.log(variable);
  } else {
    console.log('잘못된 값');
  }
}

check(NaN);