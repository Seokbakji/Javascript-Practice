// forEach

let arr = ["펠리시아", "라피스", "루플레"];

arr.forEach((unit, index, unitList) => {
	console.log(`${index + 1}. ${unit}`);
}); 

const unitList = [
	{이름: "펠리시아", 무기: "암기"},
	{이름: "라피스", 무기: "검"},
	{이름: "루플레", 무기: "마도서"},
	{이름: "카무이", 무기: "검"},
];

//find

let result = unitList.find((unit) => {
	if (unit.무기 === "검") {
		return true;
	}
	return false;
});

console.log(result);

//findIndex

result = unitList.findIndex((unit) => {
	if (unit.무기 === "검") {
		return true;
	}
	return false;
});

console.log(result);

//filter

result = unitList.filter((unit) => {
	if (unit.무기 === "검") {
		return true;
	}
	return false;
});

console.log(result);

//map

let newUnitList = unitList.map((unit, index) => {
	return Object.assign({}, unit, {
		id: index + 1,
		isWeaponSword: unit.무기 === "검",
	});
});

console.log(newUnitList);

//split

const str = "펠리시아 라피스 루플레 카무이 아쿠아"
const strArr = str.split(" ");

console.log(strArr);

//Array.isArray

const newUnit = Object.assign({}, unitList);

console.log(typeof unitList); //배열
console.log(typeof newUnit); //객체

console.log(Array.isArray(unitList));
console.log(Array.isArray(newUnit));

//sort

strArr.sort();
console.log(strArr); //가나다 순으로 정렬

let numbers = [27, 8, 5, 13];

numbers.sort((i, j) => {
	return i - j;

	/*

	27 - 8 > 0, 8 -> 27
	8 - 5 > 0, 5 -> 8
	5 - 13 < 0, 5 -> 13
	13 - 27 < 0, 13 -> 27

	5 8 13 27

	*/

});
console.log(numbers);


//arr.reduce((인자) => {함수}, [베열]);

let swordUnit = unitList.reduce((prev, cur) => {

	if (cur.무기 === "검") {
		prev.push(cur.이름); //검이면 prev에 이름 추가
	}
	return prev; //swordUnit에 이름 반환
}, []);

console.log(swordUnit);
