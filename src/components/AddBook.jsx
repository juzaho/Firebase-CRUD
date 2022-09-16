import { Form, InputGroup, Button, ButtonGroup, Alert } from "react-bootstrap";
import React from "react";
import { useState } from "react";

export default function AddBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [status, setStatus] = useState("Available");
  const [flag, setFlag] = useState(false);
  const [message, setMessage] = useState({ error: false, msg: "" });

  const handleSubmit = async (e) => {
    //do stuff hehe
    e.preventDefault();

    
  };

  return (
    <>
      <div className="p-4 box">
        {message?.msg && (
          <Alert
          variant={message?.error ? "danger": "success"}
          dismissible
          onClose={()=>setMessage("")}>
            {message?.msg}
          </Alert>
        )}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBookTitle">
            <InputGroup>
              <InputGroup.Text id="formBookTitle">A</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Book Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBookAuthor">
            <InputGroup>
              <InputGroup.Text id="formBookAuthor">B</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Book Author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <ButtonGroup aria-label="Basic example" className="mb-3">
            <Button
              disabled={flag}
              variant="success"
              onClick={() => {
                setStatus("Available");
                setFlag(true);
              }}
            >
              Available
            </Button>

            <Button
              disabled={!flag}
              variant="danger"
              onClick={() => {
                setStatus("Not Available");
                setFlag(false);
              }}
            >
              Not Available
            </Button>
          </ButtonGroup>

          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Add / Update
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
}
