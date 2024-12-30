import React, { useState } from "react";
import { Form, Row, Col, Container } from "react-bootstrap";

const ClientForm = () => {
  // Define local state for the form data
  const [clientData, setClientData] = useState({
    name: "",
    email: "",
    mobNo: "",
    workArea: "",
    companyName: "",
    clientId: "",
    address: "",
  });

  // Handle changes in the form fields
  const handleClientChange = (e) => {
    const { name, value } = e.target;
    setClientData({
      ...clientData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", clientData);
  };

  return (
    <Container className="mt-3">
      <div className="form-container shadow-lg p-4 rounded">
        <h3 className="mb-4">Client Information</h3>
        <Form onSubmit={handleSubmit}>
          {/* First row: Name, Email, and Mobile No. */}
          <Row className="mb-3">
            <Col xs={12} sm={6} md={4}>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={clientData.name}
                  onChange={handleClientChange}
                  placeholder="Enter name"
                />
              </Form.Group>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={clientData.email}
                  onChange={handleClientChange}
                  placeholder="Enter email"
                />
              </Form.Group>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <Form.Group controlId="formMobile">
                <Form.Label>Mobile No.</Form.Label>
                <Form.Control
                  type="text"
                  name="mobNo"
                  value={clientData.mobNo}
                  onChange={handleClientChange}
                  placeholder="Enter mobile number"
                />
              </Form.Group>
            </Col>
          </Row>

          {/* Second row: Work Area, Company Name, and Client ID */}
          <Row className="mb-3">
            <Col xs={12} sm={6} md={4}>
              <Form.Group controlId="formWorkArea">
                <Form.Label>Work Area</Form.Label>
                <Form.Control
                  type="text"
                  name="workArea"
                  value={clientData.workArea}
                  onChange={handleClientChange}
                  placeholder="Enter work area"
                />
              </Form.Group>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <Form.Group controlId="formCompanyName">
                <Form.Label>Company Name</Form.Label>
                <Form.Control
                  type="text"
                  name="companyName"
                  value={clientData.companyName}
                  onChange={handleClientChange}
                  placeholder="Enter company name"
                />
              </Form.Group>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <Form.Group controlId="formClientId">
                <Form.Label>Client ID</Form.Label>
                <Form.Control
                  type="text"
                  name="clientId"
                  value={clientData.clientId}
                  onChange={handleClientChange}
                  placeholder="Enter client ID"
                />
              </Form.Group>
            </Col>
          </Row>

          {/* Address Section */}
          <h5 className="mb-3">Address</h5>
          <Row className="mb-3">
            <Col xs={12} md={6}>
              <Form.Group controlId="formAddress">
                <Form.Label>Full Address</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="address"
                  value={clientData.address || ""}
                  onChange={handleClientChange}
                  placeholder="Enter full address"
                />
              </Form.Group>
            </Col>
          </Row>

          {/* Submit Button */}
          <button type="submit" className="btn btn-success btn-sm">
            Submit
          </button>
        </Form>
      </div>
    </Container>
  );
};

export default ClientForm;
