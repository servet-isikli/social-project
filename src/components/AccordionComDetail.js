import React from "react";
import { Accordion, Alert, ListGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";
import DataComponent from "../utils/DataComponent";
import allData from "../data/data";

const AccordionComDetail = () => {
  const { dataType } = useParams();
    const data = allData[dataType];

    if (!data) {
      return <div>Geçersiz Veri Türü</div>; 
    }

  return (
    <div className="mt-3">
      <Accordion>
        <Accordion.Item eventKey="0">
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
      </Accordion>
    </div>
  );
};

export default AccordionComDetail;
