import React from "react";
import Form from "react-bootstrap/Form";

export default function Contact() {
  return (
    <section
      className="contactBackground"
      style={{ display: "inline-block", width: "100%" }}
    >
      <section
        id="contactInfo"
        style={{ textAlign: "center", margin: "120px 0px" }}
      >
        <h4>Thank you for getting to know me.</h4>
        <h1>I'd Love to Talk to You Too!</h1>
        <a className="contactDetail btn btn-primary" href="tel:+8177715620">
          (817) 771-5620
        </a>

        <a
          className="contactDetail btn btn-primary"
          href="mailto:sallyalvarenga35@gmail.com"
        >
          sallyalvarenga35@gmail.com
        </a>
      </section>
      <h4 style={{ textAlign: "center" }}>Or send me a message right now!</h4>
      <Form
        style={{
          display: "flex",
          flexDirection: "column",
          flexBasis: "50%",
          alignItems: "center",
          marginBottom: "50px",
        }}
      >
        <Form.Group
          className="mb-3"
          controlId="exampleForm.ControlInput1"
          style={{ width: "60%" }}
        >
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="exampleForm.ControlTextarea1"
          style={{ width: "60%" }}
        >
          <Form.Label>Your message to me.</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form>
    </section>
  );
}
