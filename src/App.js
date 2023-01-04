import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { Nav, Carousel } from "react-bootstrap";
import Chinese from "./components/ChineseFood/Chinese";
import ChineseDetail from "./components/ChineseFood/ChineseDetail";
import Slide from "./components/Slide/Slide";

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
            <Nav.Link eventKey="4" href="/western">
              양식
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>

      <Routes>
        <Route path="/" element={<Slide />} />
        <Route path="/chinese" element={<Chinese />} />
        <Route path="/chinese/:id" element={<ChineseDetail />} />
      </Routes>
    </>
  );
}

export default App;
