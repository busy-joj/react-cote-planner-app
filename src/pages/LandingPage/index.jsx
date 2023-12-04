import React from "react";
import "./landing.css";

const LandingPage = () => {
  return (
    <div className="wrap">
      <div className="wrap-content">
        <h1>코딩테스트 문제 매일 풀고 있다고 안심하시면 안됩니다.</h1>
        <p className="text">
          문제를 많이 푸는 것보다 중요한 것은{" "}
          <span className="point">인식하고 푸는 것입니다.</span>
          <br />
          해결한 문제를 복습하여야 기억하고 인식할 수 있습니다. <br />
          저희가 자동화된 학습과 복습 일정을 제공하여 코테 지옥 탈출을
          돕겠습니다.
        </p>
        <ul className="function">
          <li className="functionItem">
            <span className="title">나만의 학습 루틴</span>
            <span className="desc">
              나만의 루틴을 만들고 루틴에 맞게 자동화된 학습, 복습일정 제공
            </span>
          </li>
          <li className="functionItem">
            <span className="title">직관적인 성취 체크</span>
            <span className="desc">
              월간, 주간 통계는 물론, 잔디를 심고 심은 잔디까지 관리
            </span>
          </li>
          <li className="functionItem">
            <span className="title">알림 기능</span>
            <span className="desc">
              바쁘실테니 루틴을 까먹지 않게 학습, 복습 알림 제공
            </span>
          </li>
        </ul>
        <div className="action">
          <span className="title">
            저희와 함께 관리하시고, 코테 해결하시죠!
          </span>
          <button className="button">USE NOW!</button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
