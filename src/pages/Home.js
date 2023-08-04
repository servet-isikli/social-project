import React from "react";
import AlertsCom from "../components/AlertsCom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CarouselCom from "../components/CarouselCom";
// import AccordionCom from "../components/AccordionCom";
import ListGroupCom from "../components/ListGroupCom";

const Home = () => {
  return (
    <div >
      <Container>
        <Row>
          <Col sm={12}>
            <CarouselCom />
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <AlertsCom />
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <ListGroupCom />
          </Col>
          <Col sm={6}>{/* <AccordionCom /> */}</Col>
        </Row>

        {/* <Row>
          <Col sm>sm=true</Col>
          <Col sm>sm=true</Col>
          <Col sm>sm=true</Col>
        </Row> */}
      </Container>
    </div>
  );
};

export default Home;
