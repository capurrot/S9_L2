import { Container, Row, Col, Card, Button } from "react-bootstrap";
import fantasy from "../databooks/fantasy.json";

const AllTheBooks = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        {fantasy.map((book) => (
          <Col xs={6} md={4} className="text-center mb-4" key={`book-${book.asin}`}>
            <Card>
              <Card.Img
                variant="top"
                src={book.img}
                style={{ maxWidth: "200px", marginInline: "auto" }}
                className="p-2"
              />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>Prezzo: {book.price} €</Card.Text>
                <Button variant="primary">Acquista</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AllTheBooks;
