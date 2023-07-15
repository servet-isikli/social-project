import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function FooterCom() {
  return (
    <Card className="mt-3">
      <Card.Body>
        <Card.Title>Socialization Project</Card.Title>
        <Card.Text>
          This website is a project under development.
          <p>
            For this reason, it does not guarantee the accuracy of the
            information on the website
          </p>
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
