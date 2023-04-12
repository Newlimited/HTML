console.log('Hello Javascript!');

// 한줄 주석
/* 부분, 공간주석*/

// 변수 선언 방법 
// 1. 변수의 타입이 존재하지 않음
var variable_name;
var variable_name = '변수 값';
console.log(variable_name.trim());
variable_name = 10;
// console.log(variable_name.trim());

// 2. 변수 선언 키워드
// var, let, const
var variable_name;
if(10 == 10){
    var variable_name2 ='변수';
}
console.log(variable_name2);

let let_variable_1;
// let let_variable_1; 
//블록 변수 키워드 , 동일한 블럭 내에서 동일한 이름으로 지을 수 없고 그 블럭 내에서만 사용 할 수 있도록함
if(10 == 10){
    let let_variable_2 = '블럭 변수';
}
// console.log(let_variable_2);

const const_variable_1 = '상수';  // 상수이기 때문에 선언과 동시에 초기화를 해야함
// const_variable_1 = '변경 상수';

// 3. 데이터의 타입
// String 이라는 문자열로 기본타입으로 적용 , 실수와 정수를 number로 존재 , boolean 형태존재
// null 데이터 타입이 따로있음 undefind 라는 정의되지 않은 타입존재
// 다른타입은 object 타입으로 통일

// 문자열 string : '',"" 둘 다 문자열로 인식함; 참조변수가 아니기때문에 그냥 string으로 씀
let stringVariable1 = "문자열";
let stringVariable2 = '문자열';
// HTML 에서 스크립트로 사용할 적에는 snakecase로 사용하고 
// node로 확인 하면서 할 땐 개발하는용이기에 camelcase를 씀
// css 는 띄어쓰기를 언더바_ 가 아닌 하이폰 -으로 많이함
console.log(typeof(stringVariable1, stringVariable2)); 
// 둘의 타입을 반환 , 타입확인 시 typeof 사용

// 숫자 number : 정수, 실수 포함
let numberVariable1= 10;
let numberVariable2= 1.5;

console.log(typeof(numberVariable1,numberVariable2));

// 논리 boolean :true, flase
let booleanVariable = true;
console.log(typeof(booleanVariable));

//  Null 
let nullVariable = null;
console.log(typeof(nullVariable));

// 배열 : []
let arrayVariable = [1, 'A',false];
console.log(arrayVariable);

// 객체 : {}
let objectVariable = {
    // key, value 형태로 나열함 
    "key" : "value",
    "name" : "John",
    "age" : 20,
    "object" :{
        "key1" : 1
    }
}; 
// 이구조를 json 이라고 부름
// 나중에 우리가 통신으로 값들을 받고 할때는 모두 json으로 한다.
// 문자열로 구성되어있기 때문에 object를 받을 수 가잇다. 
console.log(objectVariable);