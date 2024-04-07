// 키와 값을 만들어주는 함수
function makeObj (key, val) {
	return {
		[key]: val,
	};
};

const name = makeObj("이름", "펠리시아");
const weapon = makeObj("무기", "암기");
const type = makeObj("속성", "무색");

console.log(name, weapon, type);

// 객체 복제

const unit1 = {
	name: "펠리시아",
	weapon: "암기",
};

const unit2 = Object.assign({}, unit1);
unit2.name = "라피스";
unit2.weapon = "검";

console.log(unit1, unit2);

//key 반환
console.log(Object.keys(unit1));

//value 반환
console.log(Object.values(unit1));

//전부 반환
console.log(Object.entries(unit1));

//배열로부터 객체 생성

let arr = [
	["이름", "루플레"],
	["무기", "마도서"]
];

unit3 = Object.fromEntries(arr);

console.log(unit3);