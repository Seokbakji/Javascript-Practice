//변수 사용 범위 예시

function displayName() {
	let name = "펠리시아";
	return name; //console.log(name) 으로 할시, console.log(console.log(name)) 이 되므로 undefined 출력
}

// console.log(name) => name이 displayName 안에 있는 변수이므로 출력 불가
console.log(displayName()); //name 값을 함수에서 받아서 출력함

function makecounter() {
	let num = 0; //초기값, 함수 밖에서 접근 불가능하고 function()을 통해서만 값이 변함
	return function () {
		return num++; //이 순간에는 기존 num을 반환하므로 처음 실행했을때 num = 0
	};
}

let counter = makecounter();
let counter2 = makecounter();

//num++ -> function() -> makecounter()
//function()를 makecounter()가 리턴함
//num 값은 밖에서 수정 불가능, 오직 function()에 의해서만 변함
//counter와 counter2 에서 각각 함수에 접근하므로, 이 둘의 num은 다름


console.log(counter());
console.log(counter());
console.log(counter());

console.log(counter2());
console.log(counter2());
console.log(counter2());