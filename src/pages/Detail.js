import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AccordionDetailCom from "../components/AccordionDetailCom";

const Detail = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col sm={12}>
            <AccordionDetailCom />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Detail;
