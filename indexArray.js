const arr1 = new Array();
const arr2 = [];
const arr3 = [1,2,3,4,5];
const arr4 = new Array(5);
//-- fill 특정한 값으로 배열을 일괄 초기화할 때! 
// 일일이 0,0,0,0 입력 안하는 방법
const arr5 = new Array(5).fill(5);

//-- from 1,2,3,4,5 이렇게 순차적으로 초기화하고 싶다면? 
// (from 메서드의 매개변수 순서; 배열의 값, 배열의 인덱스)
const arr6 = Array.from(Array(5), function(v, k){
  return k+1;
})
console.log(arr6);

// -- 배열 원소 길이 length... 근데 length 조작 가능
// 권장되는 방법은 아님.
const arr7 = [1,5,3,58,74,8,2,4,2]
// arr7.length = 3;
// arr7.length = 15;


// ======================================================= 배열에 편리한 함수!!

// join 한개의 원소로 붙여준다.
const arr8 = [1,2,3,4,5,6];
console.log(arr8.join(", "));

// reverse 원소들을 거꾸로 뒤집는다. 원본에 영향을 준다 뒤집는채로
console.log(arr8.reverse())

// concat 배열 두개를 합치고 싶다면?!
console.log(arr7.concat(arr8));

// ======================================================= 배열 요소 추가 및 삭제 함수!!

// push, pop  배열 끝에 추가 혹은 삭제 함수
const arr9 = [1, 2, 3, 4, 5, 6];
arr9.push(9)
arr9.push(10, 11, 12)
arr9.pop() // 12
arr9.pop() // 11
arr9.pop() // 10

// console.log(arr9.pop()) // 9 이건 삭제한게 무엇인지 출력


// shift(시작원소 삭제), unshift(시작원소 추가) 배열 시작에 추가 혹은 삭제 함수
const arr10 = [1,2,3,4,5,6];
arr10.shift()
arr10.shift()
arr10.shift()
// console.log(arr10)
arr10.unshift(1)
arr10.unshift(2,4,5)
// console.log(arr10)

// slice 중간원소 잘라서 출력 (시작인덱스, 끝인덱스-1 위치)
// slice는 원본배열에 영향없다.
const arr11 = [1,2,3,4,5,6];

console.log(arr11.slice(2,4));

// splice 중간 원소를 삭제할 수 있음 매개변수 순서는 (시작 인덱스, 삭제할 원소개수, 추가할 원소값)
const arr12 = [1,2,3,4,5,6];
arr12.splice(2,0,3);
arr12.splice(2,1);
console.log(arr12)


// ======================================================= 배열 순회 함수!!

const arr13 = [1,2,3,4,5,6];

// 기존방법
// for(let i = 0; i<arr13.length; i+=1) {
// }

// // for of 방법
// for(const i of arr13) {
//   console.log(i);
// }



//========================================= 배열을 객체같이 다룰수 있다.. 그러나 길이는 변동X
// 자스에서 배열은 특별한 객체 취급으로 기인.
// 이건 배열을 올바르게 사용하지 않는 것이니 권장X
arr13["key"] = "value";
console.log(arr13)
console.log(arr13.length)


