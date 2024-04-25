const unitTypeInfantry = {
	moveType: "infantry",
	moveTile: 2,
	canPassHazard: false,
};

const felicia = {
	name: "Felicia",
	color: "colorless",
	weapon: "dagger",
};

felicia.__proto__ = unitTypeInfantry;

for (x in felicia) {
	if (felicia.hasOwnProperty(x)) {
		console.log('o', x);
	} else {
		console.log('x', x);
	}
};

console.log(felicia.moveType);

const unit = function(weaponName) {
	this.weaponName = weaponName;
};

unit.prototype.name = "Lapis";
unit.prototype.weaponType = "sword";
unit.prototype.color = "red";

const lapis = new unit("Killing Edge");

for (x in lapis) {
	if (lapis.hasOwnProperty(x)) {
		console.log('o', x);
	} else {
		console.log('x', x);
	}
};

console.log(lapis.name);
console.log(lapis.weaponName);