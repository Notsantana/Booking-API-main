import './App.css';
import Menu from "./components/menu";
import Home from "./pages/Home";
import Footer from "./components/footer";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import SearchList from "./pages/Searchlist";

function App() {
  return (
      <Router>
        <Menu />
        <Routes>
          <Route element={<Home />} path="/" index/>
          <Route element={<SearchList/>} path="/list" />
        </Routes>

        <Footer/>
      </Router>
  );
}

export default App;

