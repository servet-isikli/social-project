import Accordion from "react-bootstrap/Accordion";
import ListGroup from "react-bootstrap/ListGroup";
import Freiwilligendienste from "../utils/Freiwilligendienste";
import Kinderbetreuung from "../utils/Kinderbetreuung";
import Seniorenbetreuung from "../utils/Seniorenbetreuung";
import Sprachtandem from "../utils/Sprachtandem";
import HilfeFurFluchtlinge from "../utils/HilfeFurFluchtlinge";
import Sportverein from "../utils/Sportverein";
import UmweltschutzUndReinigung from "../utils/UmweltschutzUndReinigung";
import Tierheim from "../utils/Tierheim";


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
            <Seniorenbetreuung />
          </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Dil Tandemleri (Sprachtandem)</Accordion.Header>
        <Accordion.Body>
          <ListGroup>
            <Sprachtandem />
          </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>
          Mültecilere Yardım (Hilfe für Flüchtlinge)
        </Accordion.Header>
        <Accordion.Body>
          <ListGroup>
            <HilfeFurFluchtlinge />
          </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>
          Çevre Koruma ve Temizlik Faaliyetleri (Umweltschutz und Reinigung):
        </Accordion.Header>
        <Accordion.Body>
          <ListGroup>
            <UmweltschutzUndReinigung />
          </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header>
          Hayvan Barınaklarında Gönüllü Çalışmak (Tierheim):
        </Accordion.Header>
        <Accordion.Body>
          <ListGroup>
            <Tierheim />
          </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="7">
        <Accordion.Header>
          Spor Kulüplerinde Antrenörlük veya Yönetim Görevleri (Sportverein):
        </Accordion.Header>
        <Accordion.Body>
          <ListGroup>
            <Sportverein />
          </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AccordionCom;
