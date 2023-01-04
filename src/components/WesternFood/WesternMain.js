import { Col, Container, Nav, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function WesternMain() {
  let navigate = useNavigate();

  return (
    <div style={{ backgroundColor: "#FDF5E6" }}>
      <Container>
        <br />
        <Row style={{ textAlign: "center" }}>
          <Col>
            <h1>
              <b>양식 맛집 혜화</b>
            </h1>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <img
              style={{ width: "100%", height: "100%" }}
              onClick={() => {
                navigate("/bugger");
              }}
              src="https://mblogthumb-phinf.pstatic.net/MjAyMDEwMjJfMjY0/MDAxNjAzMzcyNDI1MjIy.d4FtiK396SJ4VNwY1ztN3xaVkOzXx-JJ5UWtADhoZpwg._4PiWTV1HTxgbY8vvpuRjm4NuIXTi0oqzhdoKWsGqjgg.JPEG.ixxoxxii/SE-388aa7c0-b41f-4179-a956-9442ec48ee52.jpg?type=w800"
            />
          </Col>
          <Col>
            <img
              style={{ width: "100%", height: "100%" }}
              onClick={() => {
                navigate("/france");
              }}
              src="https://img.siksinhot.com/place/1550493353291086.jpg"
            />
          </Col>
        </Row>
        <br />
        <Row style={{ textAlign: "center" }}>
          <Col>
            <h3>
              <b>버거 파크</b>
            </h3>
          </Col>
          <Col>
            <h3>
              <b>서울 프랑스</b>
            </h3>
          </Col>
        </Row>
        <Row>
          <Col style={{ textAlign: "center" }}>
            <br />
            <h4>
              <b>혜화 맛집을 소개합니다.</b>
            </h4>
            <br />
            <p style={{ color: "red" }}>* 사진을 클릭해주세요.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default WesternMain;
