import React, { useState } from "react";
import { Form, Row, Col, Container, InputGroup } from "react-bootstrap";
import { FaUser, FaEnvelope, FaPhone, FaBuilding, FaBriefcase, FaMapMarkedAlt } from "react-icons/fa";

const ClientForm = () => {
  // Define local state for the form data
  const [clientData, setClientData] = useState({
    name: "",
    email: "",
    mobNo: "",
    workArea: "",
    companyName: "",
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
    <Container className="my-5">
      <div className="form-container shadow-lg p-4 rounded">
        <h3 className="mb-4 d-flex justify-content-center">Client Information</h3>
        <Form onSubmit={handleSubmit}>
          {/* First row: Name, Email, and Mobile No. */}
          <Row className="mb-3">
            <Col xs={12} sm={6} md={4}>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <InputGroup>
                  <InputGroup.Text>
                    <FaUser />
                  </InputGroup.Text>
                  <Form.Control
                    type="text"
                    name="name"
                    value={clientData.name}
                    onChange={handleClientChange}
                    placeholder="Enter name"
                  />
                </InputGroup>
              </Form.Group>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <InputGroup>
                  <InputGroup.Text>
                    <FaEnvelope />
                  </InputGroup.Text>
                  <Form.Control
                    type="email"
                    name="email"
                    value={clientData.email}
                    onChange={handleClientChange}
                    placeholder="Enter email"
                  />
                </InputGroup>
              </Form.Group>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <Form.Group controlId="formMobile">
                <Form.Label>Mobile No.</Form.Label>
                <InputGroup>
                  <InputGroup.Text>
                    <FaPhone />
                  </InputGroup.Text>
                  <Form.Control
                    type="text"
                    name="mobNo"
                    value={clientData.mobNo}
                    onChange={handleClientChange}
                    placeholder="Enter mobile number"
                  />
                </InputGroup>
              </Form.Group>
            </Col>
          </Row>

          {/* Second row: Work Area, Company Name, and Address */}
          <Row className="mb-3">
            <Col xs={12} sm={6} md={4}>
              <Form.Group controlId="formWorkArea">
                <Form.Label>Work Area</Form.Label>
                <InputGroup>
                  <InputGroup.Text>
                    <FaBriefcase />
                  </InputGroup.Text>
                  <Form.Control
                    type="text"
                    name="workArea"
                    value={clientData.workArea}
                    onChange={handleClientChange}
                    placeholder="Enter work area"
                  />
                </InputGroup>
              </Form.Group>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <Form.Group controlId="formCompanyName">
                <Form.Label>Company Name</Form.Label>
                <InputGroup>
                  <InputGroup.Text>
                    <FaBuilding />
                  </InputGroup.Text>
                  <Form.Control
                    type="text"
                    name="companyName"
                    value={clientData.companyName}
                    onChange={handleClientChange}
                    placeholder="Enter company name"
                  />
                </InputGroup>
              </Form.Group>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <Form.Group controlId="formAddress">
                <Form.Label>Full Address</Form.Label>
                <InputGroup>
                  <InputGroup.Text>
                    <FaMapMarkedAlt />
                  </InputGroup.Text>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="address"
                    value={clientData.address || ""}
                    onChange={handleClientChange}
                    placeholder="Enter full address"
                  />
                </InputGroup>
              </Form.Group>
            </Col>
          </Row>

          {/* Submit Button */}
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-secondary btn-sm">
              Submit
            </button>
          </div>
        </Form>
      </div>
    </Container>
  );
};

export default ClientForm;
