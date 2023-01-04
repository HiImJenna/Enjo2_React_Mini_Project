import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import data from "./ChineseData";

function ChineseDetail() {
  const { id } = useParams();
  const [restaurant] = useState(data[id - 1]);
  console.log(restaurant);

  const contentList = restaurant.content.map((item) => (
    <div
      style={{
        margin: "3px auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "550px",
      }}
    >
      {item}
    </div>
  ));

  const imageList = restaurant.subImages.map((item) => (
    <Col sm={4}>
      <img
        src={item}
        alt=""
        style={{
          width: "100%",
          height: "200px",
          marginTop: "10px"
        }}
      />
    </Col>
  ));

  return (
    <>
      <h2
        style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {restaurant.title}
      </h2>
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={restaurant.storeImage}
          alt="매장이미지"
          style={{
            width: "600px",
            height: "400px",
          }}
        />
      </div>

      {contentList}

      <Container>
        <Row>{imageList}</Row>
      </Container>
    </>
  );
}

export default ChineseDetail;
