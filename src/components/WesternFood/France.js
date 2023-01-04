import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import fdata from "./fdata";

function France(props) {
  let [france, setfrance] = useState(fdata);
  return (
    <div style={{ backgroundColor: "#FDF5E6" }}>
      <Container>
        <br />
        <Row style={{ textAlign: "center" }}>
          <Col>
            <h1>
              <b>서울프랑스</b>
            </h1>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <img
              src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FY06TF%2Fbtre6CseJzR%2Frq0qlbBH36FbaXIsTfhRt1%2Fimg.jpg"
              style={{ width: "100%", height: "600px" }}
            />
          </Col>
          <Col>
            <br />
            <Row>
              <Col>
                <b>주소</b>
              </Col>
              <Col>서울 종로구 대학로12길 53 3층 서울프랑스</Col>
            </Row>
            <br />
            <Row>
              <Col>
                <b>영업 시간</b>
              </Col>
              <Col>
                수 ~ 일 11:30 ~ 21:20
                <br /> 15:00 -17:00 브레이크타임
              </Col>
            </Row>
            <br />
            <Row>
              <Col>
                <b>전화번호</b>
              </Col>
              <Col>0507-1316-7725</Col>
            </Row>
            <br />
            <Row>
              <Col>
                <b>정보</b>
              </Col>
              <Col>단체석, 포장, 배달</Col>
            </Row>
            <br />
            <Row>
              <Col>
                <b>결제</b>
              </Col>
              <Col>현금, 카드, 제로페이</Col>
            </Row>
            <br />
            <Row>
              <Col>
                <b>대표메뉴</b>
              </Col>
              <Col>
                라따뚜이
                <br />
                뵈프부르기뇽
                <br />
                라구소스파스타
                <br />
                시금치크림파스타
                <br />
              </Col>
            </Row>
          </Col>
        </Row>
        <br />
        <br />
        <br />
        <h1 style={{ textAlign: "center" }}>MENU</h1>
        <br />
        <Row>
          {france.map((item, i) => {
            return (
              <Fcard france={france[i]} i={i} key={i}>
                <br />
              </Fcard>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

function Fcard(props) {
  return (
    <Col sm={6} style={{ marginTop: "20px" }}>
      <img src={props.france.image} width="100%" height="400px" />
      <br />
      <div style={{ textAlign: "right" }}>
        <b>{props.france.title}</b>
        <br />
        {props.france.price}원
      </div>
    </Col>

    //   <Row>
    //   <Col sm={6} style={{ marginTop: "20px" }}>
    //     <img src={props.france.image} width="100%" height="400px" />
    //     <br />
    //   </Col>
    //   <Col sm={3}>
    //     <b>{props.france.title}</b>
    //     <br />
    //     {props.france.price}원
    //   </Col>
    // </Row>
  );
}

export default France;
