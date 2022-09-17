import React from "react";
import { useState, useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import BookDataService from "../services/book.services";

export default function BookList({getBookId}) {
  const [books, setBooks] = useState([]);

  useEffect(()=>{
    getBooks();
  }, [])

  const getBooks = async () => {
    const data = await BookDataService.getAllBooks();
    console.log(data.docs);
    setBooks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
  }

  const deleteHandler = async (id) => {
    await BookDataService.deleteBook(id);
    getBooks();
  }



  return (
    <>
      <div className="mb-2">
        <Button variant="dark edit" onClick={getBooks}>Refresh List</Button>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>Book Title</th>
            <th>Book Author</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {books.map((doc, index) => {
            return (
              <tr key={doc.id}>
                <td>{index + 1}</td>
                <td>{doc.title}</td>
                <td>{doc.author}</td>
                <td>{doc.status}</td>

                <td className="d-flex justify-content-center gap-4">
                  <Button variant="secondary" onClick={(e) => getBookId(doc.id)} >Edit</Button>

                  <Button variant="danger" onClick={(e) => deleteHandler(doc.id)}>Delete</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}
