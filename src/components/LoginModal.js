import React from "react";
import { Modal, Button, Form, InputGroup } from "react-bootstrap";
import { FaEnvelope, FaLock, FaUserPlus, FaKey } from "react-icons/fa";

const LoginModal = ({ show, onClose }) => {
  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login clicked");
  };

  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title className="text-center w-100">Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleLogin}>
          {/* Email Input */}
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email Address</Form.Label>
            <InputGroup>
              <InputGroup.Text>
                <FaEnvelope />
              </InputGroup.Text>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                required
              />
            </InputGroup>
          </Form.Group>

          {/* Password Input */}
          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <InputGroup>
              <InputGroup.Text>
                <FaLock />
              </InputGroup.Text>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                required
              />
            </InputGroup>
          </Form.Group>

          {/* Login Button */}
          <div className="d-flex justify-content-center">
  <Button variant="secondary" type="submit" size="sm" className="mb-3" style={{ width: '150px' }}>
    Login
  </Button>
</div>


        </Form>

        {/* Additional Options */}
        <div className="text-center">
          <p>
            <a href="#register" className="text-secondary">
              <FaUserPlus className="me-1" />
              Register
            </a>
          </p>
          <p>
            <a href="#forgot-password" className="text-secondary">
              <FaKey className="me-1" />
              Forgot Password?
            </a>
          </p>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;
