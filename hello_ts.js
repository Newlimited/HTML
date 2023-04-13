console.log('Hello Typescript!');
// 변수 
var number;
// let, const 변수명 : 데이터타입  ==>> 선언임
number = 10;
// number = 'string';
var string = 'string'; // 데이터타입을 지정하지않음
// string = 10;  
// 이렇게 해도 에러를 뱉어냄 초기화시 값이 들어온 타입으로, 묵시적으로 형을 지정함 데이터타입이 정해짐
// 함수
var funtion = function (arg) {
    return 'string'; // 반환타입을 string 으로 지정한다. 
    // 매개변수를 받을 땐 타입을 지정해줘야 한다. arg 는 any 로 모든타입을 받을 수 있는 타입니다.
    // 그래서 () 안에 arg가 들어가면 안된다.
    // 넣는다면 (arg : type) 를 넣고 type은 데이터타입을 넣어줘야한다.
};
// 객체 타입보는방법
// 1. class를 이용
var Object1 = /** @class */ (function () {
    // 원래는 에러가 떳다 . 생성자를 만들어서 선언 해 주면 에러가 풀린다.
    function Object1(prop1, prop2) {
        this.prop1 = prop1;
        this.prop2 = prop2;
    }
    ;
    return Object1;
}());
;
var object1 = { prop1: 'prop1', prop2: 2 }; // prop2는 필수로 필요하다.
var object2 = { prop1: 'prop1', prop2: 2 };
var object3 = { prop1: 'prop1', prop2: 2 };
var object4 = { prop1: 'prop1', prop2: 2, prop3: 'prop3', prop4: 2 };
// 이렇게 다 적어줘야함
// 4. enum 열거형 타입 (이놈~~~)
var Fruits;
(function (Fruits) {
    Fruits["APPLE"] = "\uC0AC\uACFC";
    Fruits["BANANA"] = "\uBC14\uB098\uB098";
    Fruits["MELON"] = "\uBA54\uB860";
})(Fruits || (Fruits = {}));
var fruit = Fruits.APPLE; // 어떤녀석을 넣을지 확실히 정해줘야함
console.log(fruit);
