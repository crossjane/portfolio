import './App.css';

function App(){






return (
    <>
<header>
        <div className="header-txt-container">
            <div className="x-mark"></div>
            화영의 작업공간
            <div className="x-mark"></div><br />
        </div>
    </header>

    <div className="floating-indicator">
        <div className="indicator-wrapper">
            <div className="indicator active"></div>
            <span className="indicator-text">About Me</span>
        </div>
        <div className="indicator-wrapper">
            <div className="indicator"></div>
            <span className="indicator-text">Personal Works</span>
        </div>
        <div className="indicator-wrapper">
            <div className="indicator"></div>
            <span className="indicator-text">Team Projects</span>
        </div>
        <div className="indicator-wrapper">
            <div className="indicator"></div>
            <span className="indicator-text">UX/UI Projects</span>
        </div>
    </div>
  

    <div className="main-banner">WhaYoung Kim</div>
    <div className="aboutMe-img">
        <br/>
        <br/>
        <img src="/img/line_keyboard.png" alt="" width="400" />
    </div>
    <div className="body-container">
      <div className="aboutMe">
      
          <div className="aboutMe-script">
              <p>안녕하세요.
                  <b>프론트엔드 지원자 김화영</b>입니다.<br />
                  <br />

                  IT분야에서 UX기획자와 UI디자이너로서의 경험을 바탕으로<br/> 프론트엔드 개발자의 길을 걷고 있는 김화영입니다.
                  기획, 디자인, 개발을 아우르는 경험에서 얻은 <b>사용자 중심의 사고와 협업 능력</b>을 강점으로 삼고있습니다. 이를 바탕으로
                  사용자에게 가치를 전달하는 최적의 서비스를 개발하는 데 기여하고자 합니다.
              </p>
          </div>
      </div>

      </div>
      <div className="project-container">
          <div className="studyProject">
              <ul>
                  <p style={{fontSize: "20px"}}><b>개인작업</b><br/><br />
                  <div className="diagonal-line"></div>
                  <p style={{fontSize: "15px", color:"rgb(134, 134, 134)", marginTop: "25px"}}>개인적으로 공부한 코드, 미니 프로젝트입니다.<br />
                      부족했던 공부를 목적으로 같은 기능을 다양한 방법으로 시도해보며 코드의 이해도를 높였습니다.
                  </p>
                  </p>
                  <div className='project-box'>
                    <li style={{marginTop:"80px"}}>
                        <a
                            href="http://ec2-13-208-175-84.ap-northeast-3.compute.amazonaws.com:4000/"
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                        <img src="/img/todoList.jpg" alt="프로젝트 미리보기" width="200" />
                        </a> 
                        <div className='box-script'>
                        React 작동 원리 습득 순수 자바스크립트로 작성한 Todo List를 React로 리팩토링하며,<br/> React의 작동 원리와 상태 관리 방식을 실질적으로 익히고자 하였습니다.
                        </div>
                    </li>
                       
                  </div>
                    <li style={{marginTop:"80px"}}>아이콘 + 링크 + 간단설명 </li>
                    <li style={{marginTop:"80px"}}>아이콘 + 링크 + 간단설명 </li>
                    <li style={{marginTop:"80px"}}>아이콘 + 링크 + 간단설명 </li>
              </ul>
          </div>
          <div className="project">
              <ul>
                  <p style={{fontSize: "20px"}}/><b>팀 프로젝트</b><br/><br />
                  <div className="diagonal-line"></div>
                  <p style={{fontSize: "15px", color:"rgb(8, 5, 5)", marginTop: "25px"}}>여러 팀원들과 함께 진행했던 프로젝트 입니다.<br />
                      파트를 나누어 팀원 모두가 기획부터 백엔드까지 경험 해보며 서비스의 큰 흐름을 파악할 수 있었습니다.
                  </p>
                  <li style={{marginTop:"80px"}}>왼쪽 프로젝트 사진 + 간단설명 + (링크)____</li>
                  <li style={{marginTop:"80px"}}>왼쪽 프로젝트 사진 + 간단설명 + (링크)___</li>
              </ul>
          </div>
          <div className="pre-project">
              <ul>
                  <p style={{fontSize: "20px"}}/><b>UI/UX 작업(비개발)</b><br/><br />
                  <div className="diagonal-line"></div>
                  <p style={{fontSize: "15px", color:"rgb(134, 134, 134)", marginTop: "25px"}}>디자인, 기획 분야에서 활동하며 진행했던 프로젝트 입니다.
                      <br />
                      이전 회사 작업의 내부 보안 상, 외부로 런칭 되었거나 과거 진행했던 포트폴리오 위주로 구성하였습니다.
                  </p>
                  <li style={{marginTop:"80px"}}>왼쪽 프로젝트 사진 + 간단설명 + (링크)</li>
                  <li style={{marginTop:"80px"}}>왼쪽 프로젝트 사진 + 간단설명 + (링크)</li>
              </ul>
          </div>
      </div>
    
    </>



    );

}



export default App;