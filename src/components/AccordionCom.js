import Accordion from "react-bootstrap/Accordion";
import ListGroup from "react-bootstrap/ListGroup";
import Freiwilligendienste from "../utils/Freiwilligendienste";
import Kinderbetreuung from "../utils/Kinderbetreuung";

function AccordionCom() {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          Yardım Kuruluşlarında Gönüllü Çalışmak
        </Accordion.Header>
        <Accordion.Body>
          <ListGroup>
            <Freiwilligendienste />
          </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Çocuk Bakıcılığı (Kinderbetreuung)</Accordion.Header>
        <Accordion.Body>
          <ListGroup>
            <Kinderbetreuung />
          </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Yaşlı Bakımı (Seniorenbetreuung)</Accordion.Header>
        <Accordion.Body>
          <ListGroup>
            <Kinderbetreuung />
          </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Dil Tandemleri (Sprachtandem)</Accordion.Header>
        <Accordion.Body>
          <ListGroup>
            <Kinderbetreuung />
          </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>
          Mültecilere Yardım (Hilfe für Flüchtlinge)
        </Accordion.Header>
        <Accordion.Body>
          <ListGroup>
            <Kinderbetreuung />
          </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>
          Çevre Koruma ve Temizlik Faaliyetleri (Umweltschutz und Reinigung):
        </Accordion.Header>
        <Accordion.Body>
          <ListGroup>
            <Kinderbetreuung />
          </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header>
          Hayvan Barınaklarında Gönüllü Çalışmak (Tierheim):
        </Accordion.Header>
        <Accordion.Body>
          <ListGroup>
            <Kinderbetreuung />
          </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="7">
        <Accordion.Header>
          Spor Kulüplerinde Antrenörlük veya Yönetim Görevleri (Sportverein):
        </Accordion.Header>
        <Accordion.Body>
          <ListGroup>
            <Kinderbetreuung />
          </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AccordionCom;
