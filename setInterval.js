//setInterval(함수, 시간, 인수); , clearInterval();

let num = 0;

function showTime() {
	console.log(`코드 실행 시간 : ${num++}초`);

	if (num > 10) {
		clearInterval(tid); //10초가 지나면 취소
	};
};

const tid = setInterval(showTime, 1000); //바로 실행