const unit = {
	이름: "펠리시아",
	무기: "암기",
};

//사용자가 보게 되는 메세지
for (let key in unit) {
	console.log(`${key}은(는) ${unit[key]}입니다.`);
};

//임의의 코드를 unit에 추가하고 싶음
const showName = Symbol("show name");

//Symbol을 unit의 key로 추가
unit[showName] = function () {
	console.log(this.이름);
};

//Symbol로 존재하는 함수 실행
unit[showName] ();