import React, { useRef } from "react";
import { Container, Form, Button } from "react-bootstrap";

export default function Login() {
  const idRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <Container
      className="align-items-center d-flex"
      style={{ height: "100vh" }}
    >
      <Form className="w-100">
        <Form.Group>
          <Form className="label">
            <Form className="label">Enter Your Id</Form>
            <Form.Control type="text" ref={idRef}></Form.Control>
          </Form>
        </Form.Group>
        <Button type="submit">Login</Button>
        <Button variant="secondary">Create a new Id</Button>
      </Form>
    </Container>
  );
}
