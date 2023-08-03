import React from "react";
import Alert from "react-bootstrap/Alert";
import { Accordion, ListGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";
import allData from "../data/data";

const AccordionComDetail = () => {
  const { dataType } = useParams();
  const data = allData[dataType];

  if (!data) {
    return <div>Geçersiz Veri Türü</div>;
  }

  const mappedData = data.map((item) => (
    <div key={item.id}>
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <a href={item.link} target="_blank" rel="noopener noreferrer">
        {item.name}
      </a>
      <hr />
    </div>
  ));

  return (
    <div className="mt-3">
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Kuruluslarin Listesi</Accordion.Header>
          <Accordion.Body>
            <ListGroup>
              <Alert variant="success" className="text-left mt-2">
                {/* <Alert.Heading></Alert.Heading> */}
                {mappedData}
              </Alert>
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default AccordionComDetail;
