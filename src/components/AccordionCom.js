import Accordion from "react-bootstrap/Accordion";
import ListGroup from "react-bootstrap/ListGroup";
import Freiwilligendienste from "./Freiwilligendienste";

function AccordionCom() {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          Ehrenamtlich engagieren - Freiwilligendienste
        </Accordion.Header>
        <Accordion.Body>
          <ListGroup>
            <Freiwilligendienste />
            {/* <ListGroup.Item>
              <Freiwilligendienste />
            </ListGroup.Item>
            <ListGroup.Item>
              <Freiwilligendienste />
            </ListGroup.Item>
            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item> */}
          </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Wohltätigkeitsorganisationen</Accordion.Header>
        <Accordion.Body>
          <ListGroup>
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AccordionCom;
