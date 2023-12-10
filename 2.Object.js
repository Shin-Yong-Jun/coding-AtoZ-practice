// ================================================ 객체편, 객체 만들기
const obj1 = new Object();
const obj2 = {};
const obj3 = { name: "전신용", company: "samsung" };

//====== 객체 원소 추가 및 제거하기

const obj4 = { name: "전신용", company: "samsung" };

// 추가
obj4["email"] = "jesikah2@naver.com";
obj4.phone = "01039152118";
// console.log(obj4);

// 삭제
delete obj4.phone;
// console.log(obj4);

// 객체 내부에 원하는 정보가 있는지 확인하기 in
// console.log("email" in obj4);
// console.log("phone" in obj4);

// 객체 내부의 key 만 혹은 value만 배열방식으로 순회해서 뽑고 싶다면
// console.log(Object.keys(obj4));
// console.log(Object.values(obj4));

// for in 쉽게 객체 순회

for (const key in obj4) {
  console.log(key, obj4[key]);
}
