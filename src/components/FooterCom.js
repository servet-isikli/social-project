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
                Bu web sitesi geliştirme aşamasındaki bir projedir.
                {/* Doğa yürüyüşleri, Sinema ve tiyatro etkinlikleri, Spor
                etkinliklerine katılma, Müzik konserleri ve festivalleri, Sanat
                sergilerini gezip inceleme, Yemek yeme etkinlikleri ve restoran
                deneyimleri, Gönüllü çalışmalara katılma, Sosyal yardım ve bağış
                faaliyetleri, Kitap kulüplerine katılma, Kahve veya çay
                buluşmaları, Oyun geceleri düzenleme veya katılma, Dans
                etkinliklerine katılma, Konferans ve seminerlere katılma, Spor
                takımlarına destek verme, Piknik ve barbekü etkinlikleri
                düzenleme */}
              </p>
              <p>
                Web sitesindeki bilgilerin doğruluğunu garanti edilmez. Bilgiler
                genel bilgilendirme amacıyla sunulmuş olup resmi veya
                doğrulanmış bilgiler yerine geçmez. Bu bilgiler derlenerek ve
                OpenAI tarafından geliştirilen yapay zeka dil modeli olan
                ChatGPT tarafından da sağlanmıştır. Kaynaklarınızı doğrulamak ve
                resmi bilgilere ulaşmak için ilgili kuruluşları veya güvenilir
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
