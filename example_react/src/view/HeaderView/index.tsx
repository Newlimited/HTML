import React from 'react'

export default function Header() { //만들자 말자 export 시켜버림 default 로 자동으로 박혀있음
    // export 도 있고 .. export default 도있음 export를 적용시키면 import로 받을 수 있음
    // export 는 파일의 요소로 import를 할 수있음 한파일에서 여러개요소를 보낼 수 있음
    // 받아올 때 'import{ 요소, 요소, ...} from 파일경로' 이렇게 다 적어줘야함. 
    // 그리고 요소의 이름은 동일해야함 대소문자까지도 ..

    // export default는 한 파일 내에서 하나만 가능 'import 파일이름 from 경로'
    // 단 요소의 이름을 다르게 써도됨 
    return (
        // 렌더링 시킬것들을 적어줌

        <div className="header">
            <div className="header-inner">
                <a href="https://www.naver.com" className="logo">
                    <h1 className="blind">NAVER</h1>
                </a>
                <div className="lang">
                    <select className="select">
                        <option>한국어</option>
                        <option>English</option>
                    </select>
                </div>
            </div>
        </div>


    );
}
