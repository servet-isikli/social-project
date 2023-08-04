import React from "react";
import { Accordion, Alert, ListGroup } from "react-bootstrap";
import allData from "../data/data";
import DataComponent from "../utils/DataComponent";

function AccordionCom() {
  const dataCategory = Object.keys(allData);

  return (
    <Accordion className="mt-3">
      {dataCategory.map((dataCategory) => (
        <Accordion.Item key={dataCategory} eventKey={dataCategory}>
          <Accordion.Header>{allData[dataCategory][0].header}</Accordion.Header>
          <Accordion.Body>
            <ListGroup>
              <Alert variant="success" className="text-left mt-2">
                {/* <Alert.Heading></Alert.Heading> */}
                <DataComponent dataCategory={dataCategory} />
              </Alert>
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}

export default AccordionCom;
