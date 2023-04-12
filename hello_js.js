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
// null 데이터 타입이 따로있음 undefined 라는 정의되지 않은 타입존재
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
arrayVariable[0];
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

//`연산자
//`1. 나눗셈 연산자
let number1 = 10 / 3;
console.log(number1);
//`2. 제곱 연산자
let number2 = 10 ** 3;
console.log(number2);
//`3. 비교연산자  ==, === 서로 다름..
let numberValue10 = 10;
let stringValue10 = '10';
console.log(numberValue10 == stringValue10); 
// 문자열을 숫자로 바꿔서 , 혹은 숫자를 문자열로 바꿔서 비교
console.log(numberValue10 ===stringValue10); 
// 타입까지 비교

//` if 조건
let tmpValue = null; //` if 자리에 모든 변수가 올 수 있다.
if(tmpValue)console.log('true');
else console.log('false'); 
//* tmpValue가 0 인경우 false가 찍힌다. 0이 아닌 모든 것들은 true로 반환
//* 문자열 경우엔 비어있다면 false, 공백이라도 있다면 true로 반환

//` Class
class Human{
    name;
    age;
    address;
    // instance 변수들
    // 생성자를 여러개만들수 없음
    constructor(name, age, address) {
        this.name = name; 
        this.age = age; 
        this.address = address; 
    }
    // constructor(age){
    //     this.age=age;
    // }
    // 이렇게 그대로 실행하면 에러남
    // JS 에서는 class는 중요하지 않음 사실 의미가 없음 왜냐면 메서드를 정의해서 쓰는것도 아니고
    // 객체를 클래스 없이 만들수 있기도 함 그냥 중괄호 써서 만들면됨 대신에 완전 틀에 맞춰서 하겟다면
    // 클래스를 만든다음에아래 Human을 생성한다.
}
let humanObject = new Human('john', 30, '부산');
console.log(humanObject.name); 
// john 이라 찍힘 만약 name을 오타로 nema로 쓰면 정의도지 않았기 때문에 undefined 가 뜸 
// 하지만 trim을 찍으면 에러뜸  Cannot read properties of undefined 가 제일 많이 뜨는 오류
// JavaScript 의 최대의 장점 : 객체를 정~~~말 편하게 다룰수 있움 비구조화 할당

//` 비구조화 할당

// const{ name, age, address} = humanObject; 
let { name, ...others} = humanObject;
console.log(name);
console.log(others);

name = 'Micle';
humanObject = {...humanObject, name};
// 각각 불리시켜줌 그리고 뒤에 name을 붙여서 이렇게 만들어짐  {name, age, address, name}
// 그럼 name 이중복됨. ...으로 만들어서 name이 중첩된다고 한다면 
//뒤에오는 name으로 덮어 씌우고 앞에 name은 날려버림
console.log(humanObject);

const tmpArray = [1, 'A' , true];
const [number, ...otherArray] = tmpArray;
// number 라는 변수에 1이 담기게 되고 otherArray에는 A, true 가 배열형태로 담김
console.log(number); // 1 
console.log(otherArray); // A , true

// 함수선언
// 자바스크립트에선 함수라고 한다 . 메서드가 아님 
// 기능상 차이는 없다. 인스턴스나 클래스내부에 있으면 메서드라 하고 class 밖에있으면 함수 function 이라고한다.
// console.log 는 메서드라고 하고....

// 함수
function function1(arg, arg2){
    // 반환 마음대로 해도됨  타입없이 arg 넣어버려도됨
}
function1(1,2);
// 근데 ! 이제 ! 다시 변수에 대해 얘기하자면 ! 변수의 타입이 없다고 했다
// 그걸 다시 얘기하면 변수에 저장하는 메모리 공간이 한정되어있지않다는 뜻이다.
// function 함수 도 메모리가 나열되어있는 형태기 때문에 변수에 들어갈 수 있을까 하는 생각을 해볼수도 있다.
// 그러면 변수처럼 선언해서 사용하고 싶다.. -> 화살표함수 가 나온다. 
const function2 = (arg1, arg2) => {
                    // 얘를 화살표공간으로 넘겨준다 라는 말임
}

function2(1, 2);
 