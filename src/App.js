import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import DbDemo from "./components/DbDemo";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/demo" element={<DbDemo />} exact />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
