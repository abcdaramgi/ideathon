import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navigator from "./components/common/Navigator";
import Portfolio from "pages/Portfolio/Portfolio";
import Profile from "pages/Profile/Profile";
import History from "pages/History/History";

function App() {
  const location = useLocation();

  return (
    <div className="App container font-pretendard font-thin pb-[56px]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/history" element={<History />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Navigator />
    </div>
  );
}

export default App;
