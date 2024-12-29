import React, { useState } from 'react';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';

const ClientForm = () => {
  // Define local state for the form data
  const [clientData, setClientData] = useState({
    name: '',
    email: '',
    mobNo: '',
    workArea: '',
    companyName: '',
    clientId: '',
    street: '',
    area: '',
    city: '',
    district: '',
    state: '',
    pinCode: '',
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
    // Here, you can submit the data, for now, let's log it to the console
    console.log('Form data submitted:', clientData);
  };

  return (
    <Container className="mt-3">
      <div className="form-container shadow-lg p-4 rounded">
        <h3 className="mb-4">Client Information</h3>
        <Form onSubmit={handleSubmit}>
          {/* First row: Name and Email */}
          <Row className="mb-3">
            <Col md={4}>
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
            <Col md={4}>
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
            <Col md={4}>
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

          {/* Second row: Work Area and Company Name */}
          <Row className="mb-3">
            <Col md={4}>
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
            <Col md={4}>
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
            <Col md={4}>
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
            <Col md={4}>
              <Form.Group controlId="formStreet">
                <Form.Label>Street Name</Form.Label>
                <Form.Control
                  type="text"
                  name="street"
                  value={clientData.street}
                  onChange={handleClientChange}
                  placeholder="Enter street name"
                />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group controlId="formArea">
                <Form.Label>Area Name</Form.Label>
                <Form.Control
                  type="text"
                  name="area"
                  value={clientData.area}
                  onChange={handleClientChange}
                  placeholder="Enter area name"
                />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group controlId="formCity">
                <Form.Label>City Name</Form.Label>
                <Form.Control
                  type="text"
                  name="city"
                  value={clientData.city}
                  onChange={handleClientChange}
                  placeholder="Enter city name"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md={4}>
              <Form.Group controlId="formDistrict">
                <Form.Label>District</Form.Label>
                <Form.Control
                  type="text"
                  name="district"
                  value={clientData.district}
                  onChange={handleClientChange}
                  placeholder="Enter district"
                />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group controlId="formState">
                <Form.Label>State</Form.Label>
                <Form.Control
                  type="text"
                  name="state"
                  value={clientData.state}
                  onChange={handleClientChange}
                  placeholder="Enter state"
                />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group controlId="formPinCode">
                <Form.Label>Pin Code</Form.Label>
                <Form.Control
                  type="text"
                  name="pinCode"
                  value={clientData.pinCode}
                  onChange={handleClientChange}
                  placeholder="Enter pin code"
                />
              </Form.Group>
            </Col>
          </Row>

          {/* Submit Button */}
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default ClientForm;
