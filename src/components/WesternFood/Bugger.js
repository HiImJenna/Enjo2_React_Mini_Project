import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import bdata from "./bdata";

function Bugger() {
  let [bugger, setBugger] = useState(bdata);
  console.log(bugger[0].image);
  return (
    <div style={{ backgroundColor: "#FDF5E6" }}>
      <Container>
        <br />
        <Row style={{ textAlign: "center" }}>
          <Col>
            <h1>
              <b>버거 파크</b>
            </h1>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <img
              src="https://blog.kakaocdn.net/dn/qnCKB/btq6RM3FAxF/ZvQJ5YtKPPATALFKJeYXxK/img.jpg"
              style={{ width: "100%", height: "600px" }}
            />
          </Col>
          <Col>
            <br />
            <Row>
              <Col>
                <b>주소</b>
              </Col>
              <Col>서울 종로구 대학로11길 5 1층 버거파크</Col>
            </Row>
            <br />
            <Row>
              <Col>
                <b>영업 시간</b>
              </Col>
              <Col>매일 11:00 ~ 20:50</Col>
            </Row>
            <br />
            <Row>
              <Col>
                <b>전화번호</b>
              </Col>
              <Col>0507-1475-3009</Col>
            </Row>
            <br />
            <Row>
              <Col>
                <b>정보</b>
              </Col>
              <Col>단체석, 포장, 배달, 무선 인터넷</Col>
            </Row>
            <br />
            <Row>
              <Col>
                <b>결제방법</b>
              </Col>
              <Col>현금, 카드, 제로페이</Col>
            </Row>
            <br />
            <Row>
              <Col>
                <b>대표메뉴</b>
              </Col>
              <Col>
                베이컨 치즈버거
                <br />
                아보카도 치즈버거
                <br />
                치즈버거
                <br />
                머쉬룸 치즈버거
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
          {bugger.map((item, i) => {
            return (
              <Bcard bugger={bugger[i]} i={i} key={i}>
                <br />
              </Bcard>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

function Bcard(props) {
  return (
    <Col sm={6} style={{ marginTop: "20px" }}>
      <img src={props.bugger.image} width="100%" height="400px" />
      <br />
      <div style={{ textAlign: "right" }}>
        <b>{props.bugger.title}</b>
        <br />
        {props.bugger.price}원
      </div>
    </Col>
  );
}

export default Bugger;
