import React from "react";
import { Button, Table } from "react-bootstrap";
import bookServices from "../services/book.services";

export default function BookLIst() {
  return (
    <>
      <div className="mb-2">
        <Button variant="dark edit">Refresh List</Button>
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
          <tr key="1">
            <td>1</td>
            <td>EL extranjero</td>
            <td>Albert Camus</td>
            <td>Not Available</td>

            <td className="d-flex justify-content-center gap-4" >
              <Button variant="secondary">Edit</Button>

              <Button variant="danger">Delete</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}
