import React from "react";
import { Accordion, Alert, ListGroup } from "react-bootstrap";
import allData from "../data/data";
import DataComponent from "../utils/DataComponent";

function AccordionCom() {
  const dataKeys = Object.keys(allData);

  return (
    <Accordion>
      {dataKeys.map((dataType, index) => (
        <Accordion.Item key={index} eventKey={index.toString()}>
          <Accordion.Header>{allData[dataType][0].header}</Accordion.Header>
          <Accordion.Body>
            <ListGroup>
              <Alert variant="success" className="text-left mt-2">
                {/* <Alert.Heading></Alert.Heading> */}
                <DataComponent dataType={dataType} />
              </Alert>
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}

export default AccordionCom;
