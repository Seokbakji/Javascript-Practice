//call 매개변수로 받음, apply 배열로 받음, bind this에 어떤 값을 영구히 저장

function updateNameWeapon (name, weapon) {
	this.name = name;
	this.weapon = weapon;
};

function updateSkills (...skills) {
	this.skills = skills;
};

const unit = {

};

updateNameWeapon.call(unit, "펠리시아", "암기"); //매개변수로 받음
updateSkills.apply(unit, ["공속의 비오", "오의 나선", "공속의 신조"]); //배열로 받음

console.log(unit);
console.log(unit.skills);