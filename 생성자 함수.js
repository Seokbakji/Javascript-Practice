function Unit(name, weapon) {
	this.name = name;
	this.weapon = weapon;
	this.showUnit = function () {
		console.log(`이 유닛이 사용하는 무기는 ${weapon}입니다.`);
	}
};

const unit1 = new Unit("펠리시아", "암기");
const unit2 = new Unit("라피스", "검");
const unit3 = new Unit("루플레", "마도서");

console.log(unit1, unit2, unit3);

unit1.showUnit();