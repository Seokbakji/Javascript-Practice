//글자수 조절
let scenarioList = [
	"00. 그 손이 개척하는 미래",
	"01. 암야의 동지",
	"02. 마검 강그레리",
	"03. 여정의 시작",
	"04. 백야의 동지",
	"05. 어머니와 자식",
	"06. 그 손이 개척하는 미래",
];

for (i = 0; i < scenarioList.length; i++) {
	console.log(scenarioList[i].slice(4));
};

//문자열 비교
function hasFelicia(str) {
	if (str.includes("펠리시아")) {
		console.log('통과');
	} else {
		console.log('지정된 단어를 넣어주세요.');
	}
};

hasFelicia('펠리시아 너무 예쁘다.');
hasFelicia('그래도 라피스가 더 예쁘지 않나?');
hasFelicia('펠리시아나 라피스보다 루플레가 더 예쁜거같아.');