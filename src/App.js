import GlobalStyle from "./styles/fontStyle";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DataView from "./pages/DataView";

function App() {
  return (
    <>
    <GlobalStyle />
    <div className="body">
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user_data" element={<DataView />} />
      </Routes>
    </div>
    </>
  );
}

export default App;
