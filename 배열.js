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

