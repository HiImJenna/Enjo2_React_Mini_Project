import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Nav, Carousel } from "react-bootstrap";

function App() {
  return (
    <>
      <Nav fill variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">한식</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">일식</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">중식</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3">양식</Nav.Link>
        </Nav.Item>
      </Nav>

      <Carousel slide={false}>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
            src="https://w.namu.la/s/214bfd4232b5b258ffd688690a297dd63ee00170d514e1b2eeecfd14b78b2af762aaf9f316ecb7bcaa4bd940c7824a595752d143aba660182a3b8fb76f740fe67eea1db503bbbedc0c384046b50b2809c22dd21cf7633d2fc697c310d2cb0b38c4ce5976aa6c21e51cd449264c232bda"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
            src="https://www.tastingtable.com/img/gallery/20-japanese-dishes-you-need-to-try-at-least-once/intro-1664219638.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
            src="https://blog.kakaocdn.net/dn/cQadDg/btqIZmNixWI/kkef5cKMY4YiWIDBcsX7IK/img.png"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
            src="https://singaporelocalfavourites.com/wp-content/uploads/2018/08/singapore-western-food-recipes.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default App;
