import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function FooterCom() {
  return (
    <Card className="mt-3">
      <Card.Body>
        <Card.Title>Socialization Project</Card.Title>
        <Card.Text className="text-xs">
          <Container>
            <Row>
              <Col sm={12}></Col>
              <p>
                Bu web sitesi geliştirme aşamasındaki bir projedir. Bu nedenle,
                web sitesindeki bilgilerin doğruluğunu garanti edilmez.
              </p>
              <p>
                Bu bilgilerin bazıları, OpenAI tarafından geliştirilen yapay zeka dil
                modeli olan ChatGPT tarafından sağlanmıştır. Ayrıca, genel
                bilgilendirme amacıyla sunulmuştur ve resmi veya doğrulanmış
                bilgiler yerine geçmez. Kaynaklarınızı doğrulamak ve resmi
                bilgilere ulaşmak için ilgili kuruluşları veya güvenilir
                kaynakları kontrol etmeniz önemlidir.
              </p>
            </Row>
          </Container>
        </Card.Text>
        <Button variant="primary" href="/about">
          Contact Us
        </Button>
      </Card.Body>
      <Card.Header>Socialization Project - 2023</Card.Header>
    </Card>
  );
}

export default FooterCom;
