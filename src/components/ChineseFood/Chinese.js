import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Chinese() {
  const navigate = useNavigate();
  return (
    <>
      <main role="main">
        <section
          className="jumbotron text-center"
          style={{
            backgroundColor: "#FFCC97",
          }}
        >
          <div className="container">
            <h1>혜화 중식</h1>
            <p className="lead text-muted">혜화의 맛있는 중식당</p>
          </div>
        </section>

        <div className="album py-5 bg-light">
          <Container>
            <Row>
              <Col sm={6} lg={4} style={{marginTop:"10px"}}>
                <Card>
                  <Card.Img
                    variant="top"
                    src="https://ldb-phinf.pstatic.net/20221229_181/1672284439280YC4P2_JPEG/1.jpg"
                    style={{
                      height: "250px"
                    }}
                    onClick={() => {
                      navigate("/chinese/1");
                    }}
                  />
                  <Card.Body>
                    <Card.Title>갸우뚱</Card.Title>
                    <Card.Text>혜화역 근처 중식당</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={6} lg={4} style={{marginTop:"10px"}}>
                <Card>
                  <Card.Img
                    variant="top"
                    src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxOTEyMDlfMTQg%2FMDAxNTc1ODI1NzczOTU0.j0qkOJVgiVEbP1zjvTa5afTrVn3hufxNwOAt-VsVrfsg.zQRiuF0M7IyuVtw7gFqV8CQsuxE2Dhp-UNax1E_xxC8g.JPEG.ji_f00t%2FIMG_3916.jpg"
                    style={{
                      height: "250px"
                    }}
                    onClick={() => {
                      navigate("/chinese/2");
                    }}
                  />
                  <Card.Body>
                    <Card.Title>신장군 마라탕</Card.Title>
                    <Card.Text>성균관대 근처 맛집</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={6} lg={4} style={{marginTop:"10px"}}>
                <Card>
                  <Card.Img
                    variant="top"
                    src="https://myplace-phinf.pstatic.net/20190917_252/1568729380441VNeUx_JPEG/upload_c2465cb56e50bab9fe0d655608835a68.jpeg"
                    style={{
                      height: "250px"
                    }}
                    onClick={() => {
                      navigate("/chinese/3");
                    }}
                  />
                  <Card.Body>
                    <Card.Title>명륜진사갈비</Card.Title>
                    <Card.Text>중국인이 많아요~!</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </main>
    </>
  );
}

export default Chinese;
