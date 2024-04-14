//전달받은 숫자 모두 더하기

function add (...numbers) {
	let result = 0;
	numbers.forEach((num) => result += num);
	console.log(result);
};

add(1, 2, 3, 4, 5, 6);

//numbers = 배열 자체, num = 배열 요소들

//배열로 값 받기

function unit(name, weapon, ...skills) {
	this.name = name;
	this.weapon = weapon;
	this.skills = skills;
};

//나머지 매개변수는 항상 마지막에 와야함

const unit1 = new unit("펠리시아", "암기", "공속의 비오", "오의 나선", "공속의 신조");
const unit2 = new unit("라피스", "검", "공속의 비오", "신속", "공속의 신조");

console.log(unit1);
console.log(unit2);

//변수들로 객체 만들기

let name = {이름 : "루플레"};
let weapon = {무기 : "마도서"};
let skill = ["이것도 계략의 일부야", "캔슬", "재이동 제한"];
let seal = ["생명의 호부"];

unit3 = Object.assign({},{
	name,
	weapon,
	skills : [...skill, ...seal],
});

console.log(unit3);