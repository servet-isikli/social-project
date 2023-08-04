import React from "react";
import { ListGroup, Container } from "react-bootstrap";

import allData from "../data/data";
import { Link } from "react-router-dom";

function ListGroupCom() {
  const dataCategory = Object.keys(allData);

  return (
    <Container className="mt-3 ">
      <ListGroup>
        {dataCategory.map((category) => (
          <ListGroup.Item key={category} variant="success">
            <Link to={`/detail/${category}`}>
              {allData[category][0].header}
            </Link>{" "}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}

export default ListGroupCom;
