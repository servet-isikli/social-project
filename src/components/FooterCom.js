import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function ComNavbar() {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary mt-3"
      bg="dark"
      data-bs-theme="dark"
    >
      <Container>
        <Row>
          <Col>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto flex-column">
                <Col>
                  <Navbar.Brand href="/">Socialization Project</Navbar.Brand>
                </Col>

                <Nav.Link className="text-sm">
                  Bu web sitesi geliştirme aşamasındaki bir projedir.
                </Nav.Link>

                <Nav.Link className="text-sm">
                  Web sitesindeki bilgilerin doğruluğunu garanti edilmez.
                  Bilgiler genel bilgilendirme amacıyla sunulmuş olup resmi veya
                  doğrulanmış bilgiler yerine geçmez. Bu bilgiler derlenerek ve
                  OpenAI tarafından geliştirilen yapay zeka dil modeli olan
                  ChatGPT tarafından da sağlanmıştır. Kaynaklarınızı doğrulamak
                  ve resmi bilgilere ulaşmak için ilgili kuruluşları veya
                  güvenilir kaynakları kontrol etmeniz önemlidir.
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default ComNavbar;
