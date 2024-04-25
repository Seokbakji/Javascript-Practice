function* fn() {
	const name = yield "이름을 입력해주세요";
	console.log(name);

	const weapon = yield "무기를 입력해주세요";
	console.log(weapon);

	const level = yield "레벨을 입력해주세요";
	console.log(level);

	class unitInfo {
		constructor(name, weapon, level) {
			this.name = name;
			this.weapon = weapon;
			this.level = level;
		}
	}

	const unit = new unitInfo(name, weapon, level);

	console.log(unit);
};

const makeUnit = fn();

