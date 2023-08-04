import React from "react";
import { Accordion, Alert, ListGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";
import allData from "../data/data";

const AccordionDetailCom = () => {
  const { dataCategory } = useParams();
  const data = allData[dataCategory];

  if (!data) {
    return (
      <div>
        <h1 className="mt-3">Geçersiz Veri Türü</h1>
      </div>
    );
  }

  return (
    <div className="mt-3">
      <h1>{allData[dataCategory][0].header}</h1>
      <Accordion>
        {data.map((item) => (
          <Accordion.Item key={item.id} eventKey={item.id}>
            <Accordion.Header>{item.name}</Accordion.Header>
            <Accordion.Body>
              <ListGroup>
                <Alert variant="success" className="text-left mt-2">
                  {/* <Alert.Heading></Alert.Heading> */}
                  <h2>{item.name}</h2>
                  <p>{item.description}</p>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.name}
                    </a>
                  )}
                </Alert>
              </ListGroup>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default AccordionDetailCom;
