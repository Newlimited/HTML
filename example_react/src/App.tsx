import { Dispatch, SetStateAction, useState } from 'react';
import { useRef } from 'react';
import './naver-sign-in.css';

import './App.css';
import H from "./view/HeaderView";
import F from './view/FooterView';
import Main from './view/MainView';

// App.tsx 
// tsx : typescript XML(XHTML)
// 컴포넌트로 인식하게 하려면 대문자로 시작해야함
// 안에 요소가 없기 때문에 그냥 <Header /> 로 바로 닫는다
function App() {
  //useState는 const 로 받는게 제일 명확하다.

  // id 에 입력을 받아서 저장해야한다.  setId는 값을 변경하는곳 
  // main 에 강제성이 없어서 강제성을부여하고 싶다면...  interface 에 MainProps를작성 
  return (
    <>
      <H />
      <Main />
      <F />
    </>
  );
}
export default App;