import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ReactGA from "react-ga";
import LandingPage from "./pages/LandingPage";

const gaTrackingId = process.env.REACT_APP_GA_TRACKING_ID; // 환경 변수에 저장된 추적ID 가져오기
ReactGA.initialize(gaTrackingId, { debug: true }); // react-ga 초기화 및 debug 사용
ReactGA.pageview(window.location.pathname); // 추적하려는 page 설정

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="landing" element={<LandingPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
