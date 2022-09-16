import logo from "./logo.svg";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";

import AddBook from "./components/AddBook";
import BookList from "./components/BookLIst";

function App() {
  return (
    <>
      <Container style={{width : "400px"}}>
        <Row>
          <Col>
            <AddBook/>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col>
            <BookList/>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
