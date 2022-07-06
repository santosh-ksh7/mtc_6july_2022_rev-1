import "./App.css";
import Topnavbar from "./topnavbar/Topnavbar.jsx";
import Home from "./home/Home";
import Create from "./create/Create"
import Openarticle from "./openinganarticle/Openarticle"
import Startpage from "./startpage/Startpage"
import Myaccount from "./myaccount/Myaccount"
import Editarticle from "./edit/Editarticle" 
import {Routes, Route, Link, useNavigate} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Topnavbar />
      <Routes>
        <Route path="/" element={<Startpage />} />
        <Route path="/my-account" element={<Myaccount />} />
        <Route path="/home" element={<Home />} />
        <Route path="/write" element={<Create />} />
        <Route path="/open-an-article/:id" element={<Openarticle />} />
        <Route path="/edit-article/:id" element={<Editarticle />} />
      </Routes>
    </div>
  );
}

export default App;
