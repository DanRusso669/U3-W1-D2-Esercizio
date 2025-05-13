import { Component } from "react";
import { Badge, Button, Card, Col, Container, Row } from "react-bootstrap";
import books from "../array/fantasy.json";

class AllTheBooks extends Component {
  render() {
    return (
      <>
        <Container fluid>
          <Row xs={2} md={4} lg={6}>
            <Col>
              <Card>
                <Card.Img id="cardImage" variant="top" src={books[0].img} />
                <Card.Body>
                  <Card.Title>{books[0].title}</Card.Title>
                  <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                  <Badge bg="secondary">{books[0].price}</Badge>
                  <Button variant="primary">Add To Cart</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default AllTheBooks;
