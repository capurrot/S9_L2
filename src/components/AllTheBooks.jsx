import { Container, Row, Col, Card, Button, FormSelect } from "react-bootstrap";
import fantasy from "../databooks/fantasy.json";
import history from "../databooks/history.json";
import horror from "../databooks/horror.json";
import romance from "../databooks/romance.json";
import scifi from "../databooks/scifi.json";

import { Component } from "react";

class AllTheBooks extends Component {
  state = {
    selectedBooks: fantasy,
  };
  render() {
    return (
      <Container className="mt-5">
        <Row className="mb-4">
          <Col className=" d-flex justify-content-center">
            <Button
              onClick={() => {
                this.setState({ selectedBooks: fantasy });
              }}
            >
              Fantasy
            </Button>
          </Col>
          <Col className=" d-flex justify-content-center">
            <Button
              onClick={() => {
                this.setState({ selectedBooks: history });
              }}
            >
              History
            </Button>
          </Col>
          <Col className=" d-flex justify-content-center">
            <Button
              onClick={() => {
                this.setState({ selectedBooks: horror });
              }}
            >
              Horror
            </Button>
          </Col>
          <Col className=" d-flex justify-content-center">
            <Button
              onClick={() => {
                this.setState({ selectedBooks: romance });
              }}
            >
              Romance
            </Button>
          </Col>
          <Col className=" d-flex justify-content-center">
            <Button
              onClick={() => {
                this.setState({ selectedBooks: scifi });
              }}
            >
              Scifi
            </Button>
          </Col>
        </Row>
        <Row className="mb-4">
          <Col className="col-4"></Col>
          <Col className="col-4">
            <FormSelect
              onChange={(e) => {
                switch (e.target.value) {
                  case "Fantasy":
                    this.setState({ selectedBooks: fantasy });
                    break;
                  case "History":
                    this.setState({ selectedBooks: history });
                    break;
                  case "Horror":
                    this.setState({ selectedBooks: horror });
                    break;
                  case "Romance":
                    this.setState({ selectedBooks: romance });
                    break;
                  case "Scifi":
                    this.setState({ selectedBooks: scifi });
                    break;
                }
              }}
            >
              <option>Fantasy</option>
              <option>History</option>
              <option>Horror</option>
              <option>Romance</option>
              <option>Scifi</option>
            </FormSelect>
          </Col>
          <Col className="col-4"></Col>
        </Row>
        <Row className="justify-content-center">
          {this.state.selectedBooks.map((book) => (
            <Col xs={6} md={4} className="text-center mb-4" key={`book-${book.asin}`}>
              <Card>
                <Card.Img
                  variant="top"
                  src={book.img}
                  style={{ maxWidth: "200px", marginInline: "auto" }}
                  className="p-2"
                />
                <Card.Body>
                  <Card.Title className="d-flex align-items-center" style={{ height: "150px" }}>
                    {book.title}
                  </Card.Title>
                  <Card.Text>Prezzo: {book.price} €</Card.Text>
                  <Button variant="warning">Acquista</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default AllTheBooks;
