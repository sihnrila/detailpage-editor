import SmartstoreDetailEditor from "./components/SmartstoreDetailEditor";
import "./styles/smartstore-detail.scss";

function App() {
  return (
    <div className="app-root">
      <header className="app-header">
        <h1 className="app-title">스마트스토어 상세페이지 자동 생성 에디터</h1>
        <p className="app-subtitle">
          상품 정보를 입력하면, 상세 설명 HTML을 자동으로 생성해줘요.
        </p>
      </header>
      <SmartstoreDetailEditor />
    </div>
  );
}

export default App;
