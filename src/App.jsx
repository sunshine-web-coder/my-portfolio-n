import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="App">
      <Header />
      <ScrollToTop />
       <Routes>
        <Route path="/" element={<Home />} />
        </Routes>
    </div>
  );
}

export default App;
