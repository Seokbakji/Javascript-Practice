class unitTypeInfantry {
	constructor(weaponType, weaponColor) {
		this.weaponType = weaponType;
		this.weaponColor = weaponColor;
		this.moveType = "infantry";
		this.moveTile = 2;
		this.canPassHazard = false;
	}
};

class lapis extends unitTypeInfantry {
	constructor(weaponType, weaponColor, name) {
		super(weaponType, weaponColor);
		this.name = name;
	}

	showName() {
		console.log(this.name);
	}
}

const unit = new lapis('sword', 'red', 'Lapis');

console.log(unit);

unit.showName();

//proto 추가 용이, new 안 붙일시 오류가 나서 확인 쉬움