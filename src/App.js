import { Container, Row, Col } from "react-bootstrap";

import AddBook from "./components/AddBook";
import BookList from "./components/BookLIst";
import { useState } from "react";

function App() {
  const [bookId, setBookId] = useState("");

  const getBookIdHandler = (id) => {
    console.log("Editing document with id: ", id);
    setBookId(id);
  }

  return (
    <>
      <Container style={{ width: "400px" }}>
        <Row>
          <Col>
            <AddBook id={bookId} setBookId={setBookId}/>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col>
            <BookList getBookId={getBookIdHandler} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
