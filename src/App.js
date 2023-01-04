import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { Nav, Carousel } from "react-bootstrap";
import Chinese from "./components/ChineseFood/Chinese";
import ChineseDetail from "./components/ChineseFood/ChineseDetail";
import Slide from "./components/Slide/Slide";
import Japanese from "./components/JapaneseFood/Japanese";
import Detail from "./components/JapaneseFood/JapaneseDetail";
import WesternMain from "./components/WesternFood/WesternMain";
import Bugger from "./components/WesternFood/Bugger";
import France from "./components/WesternFood/France";

function App() {
  return (
    <>
      <div style={{
        margin: "0 auto",
        width: "90%"
      }}>
        <Nav fill variant="tabs">
          <Nav.Item>
            <Nav.Link eventKey="0" href="/">
              메인
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="2" href="/japanese">
              일식
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="3" href="/chinese">
              중식
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="4" href="/westernmain">
              양식
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      <Routes>
        <Route path="/" element={<Slide />} />
        <Route path="/chinese" element={<Chinese />} />
        <Route path="/chinese/:id" element={<ChineseDetail />} />
        <Route path="/japanese" element={<Japanese />} />
        <Route path="/detail/:id" element={<Detail/>}/>
        <Route path="/westernmain" element={<WesternMain />} />
        <Route path="/bugger" element={<Bugger />} />
        <Route path="/france" element={<France />} />
      </Routes>
    </>
  );
}

export default App;