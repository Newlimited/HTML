console.log('Hello Typescript!');

// 변수 
var number : number;
// let, const 변수명 : 데이터타입  ==>> 선언임
number = 10 ;
// number = 'string';

let string = 'string'; // 데이터타입을 지정하지않음
// string = 10;  
// 이렇게 해도 에러를 뱉어냄 초기화시 값이 들어온 타입으로, 묵시적으로 형을 지정함 데이터타입이 정해짐

// 함수
const funtion = (arg:number) : string => {
    return 'string'; // 반환타입을 string 으로 지정한다. 
    // 매개변수를 받을 땐 타입을 지정해줘야 한다. arg 는 any 로 모든타입을 받을 수 있는 타입니다.
    // 그래서 () 안에 arg가 들어가면 안된다.
    // 넣는다면 (arg : type) 를 넣고 type은 데이터타입을 넣어줘야한다.
}

// 객체 타입보는방법
// 1. class를 이용
class Object1 {
    prop1 : string;
    prop2 : number;
// 원래는 에러가 떳다 . 생성자를 만들어서 선언 해 주면 에러가 풀린다.
    constructor(prop1 :string, prop2 : number){
        this.prop1 = prop1;
        this.prop2 = prop2;
    };
};

const object1: Object1 = { prop1 : 'prop1', prop2 : 2};  // prop2는 필수로 필요하다.
// 실수로 누락 되는 것을 방지 시켜준다 (컴파일의 장점)  그래서 prop2를 추가해준다.
// 솔직히 단순히 쓰고싶은데 생성자 까지 만들어주는게 너무 귀찮다.
// 이걸 해결하는 방법이 2가지가 있다.
//` 1-1 typescript 에서만 쓸 수 있는 type키워드를 쓴다.
//` 생성자 없이 만드는 방법은 아래와 같다.
// 인터페이스는 100% 작성이 되어있지않다. 
// 인터페이슨느 약속의 형식이다. 해당 개념을 그대로 가져올 수 있다.
type Object2 = {
    prop1 : string,
    prop2 : number
    // 위에와 다르게 json 형태로 따라감 
} // 생성자 없이 만드는거 .....
const object2 : Object2 ={prop1: 'prop1', prop2 : 2};

//` 1-2 interface 활용 
interface Object3 {
    prop1 : string;
    prop2 : number;
    func1? : (arg1:number) =>string; // 이렇게 하면 함수의 타입을 지정할 수 있다. 함수의 선언부에서만 작성가능
    // ↑사용하지않고 선언만 하고싶은 경우 
    //func1 이 필수로 잡혀있다. 이것을 필수가 아니게 만드는 방법은 ?를 추가한다.
}
const object3 : Object3 = { prop1: 'prop1', prop2 : 2}; 
//type script 에서는 객체에 null을 넣어줄수 없다. ex)const object3 : Object3 = null;

//근데 null도 받고싶고 객체도 받고싶다면.. type 뒤에다 | null 을 붙여주면된다.
// const object4 : Object3 | null = null;
// 타입에대해 여러개를 받을 수 있다.  

interface Object4{ // 객체 타입을 두개 합칠 수도 있다.
        prop3 : string;
        prop4 : number;
}
const object4 : Object3 & Object4 ={prop1: 'prop1', prop2:2, prop3:'prop3', prop4:2 }
// 이렇게 다 적어줘야함