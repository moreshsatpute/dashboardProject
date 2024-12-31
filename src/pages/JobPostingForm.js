import React, { useState } from "react";
import { Form, Row, Col, Container } from "react-bootstrap";
import {
  FaBriefcase,
  FaEnvelope,
  FaPhone,
  FaBuilding,
  FaUserTie,
  FaCalendarAlt,
  FaDollarSign,
  FaMapMarkedAlt,
  FaFileUpload,
  FaTasks,
  FaClipboardList,
  FaClock,
  FaCheckCircle,
  FaLocationArrow,
} from "react-icons/fa"; // Import all necessary icons

const JobPostingForm = () => {
  const [jobData, setJobData] = useState({
    clientCompanyName: "",
    email: "",
    contactDetails: "",
    positionAvailable: "",
    minExperience: "",
    jobHours: "",
    shift: "",
    jobLocation: "",
    minSalary: "",
    maxSalary: "",
    companyFullAddress: "",
    requirements: "",
    positionsByDept: "",
    deadline: "",
    file: null,
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setJobData({
      ...jobData,
      [name]:
        type === "checkbox" ? checked : type === "file" ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", jobData);
    if (jobData.file) {
      console.log("Uploaded file:", jobData.file);
    }
  };

  return (
    <Container className="mt-3 text-dark ">
      <div className="form-container shadow-lg p-4 rounded">
        {/* Centered Header */}
        <Row className="justify-content-center mb-4">
          <Col xs={12} md={6} className="text-center">
            <div className="trapezoidal-header">
              <h3 className="text-dark mb-0">
                <FaBriefcase className="me-2" />
                Job Posting Form
              </h3>
            </div>
          </Col>
        </Row>

        <Form onSubmit={handleSubmit}>
          {/* First row */}
          <Row className="mb-3">
            <Col xs={12} sm={6} md={4}>
              <Form.Group controlId="formClientCompanyName">
                <Form.Label>
                  <FaBuilding className="me-2" /> Client Company Name
                </Form.Label>
                <Form.Control
                  type="text"
                  name="clientCompanyName"
                  value={jobData.clientCompanyName}
                  onChange={handleChange}
                  placeholder="Enter company name"
                />
              </Form.Group>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <Form.Group controlId="formEmail">
                <Form.Label>
                  <FaEnvelope className="me-2" /> Email Address
                </Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={jobData.email}
                  onChange={handleChange}
                  placeholder="Enter email"
                />
              </Form.Group>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <Form.Group controlId="formContactDetails">
                <Form.Label>
                  <FaPhone className="me-2" /> Contact Details
                </Form.Label>
                <Form.Control
                  type="text"
                  name="contactDetails"
                  value={jobData.contactDetails}
                  onChange={handleChange}
                  placeholder="Enter contact number"
                />
              </Form.Group>
            </Col>
          </Row>

          {/* Second row */}
          <Row className="mb-3">
            <Col xs={12} sm={6} md={4}>
              <Form.Group controlId="formPositionAvailable">
                <Form.Label>
                  <FaUserTie className="me-2" /> Position Available
                </Form.Label>
                <Form.Control
                  type="text"
                  name="positionAvailable"
                  value={jobData.positionAvailable}
                  onChange={handleChange}
                  placeholder="Enter position"
                />
              </Form.Group>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <Form.Group controlId="formMinExperience">
                <Form.Label>
                  <FaCalendarAlt className="me-2" /> Minimum Experience
                </Form.Label>
                <Form.Control
                  type="text"
                  name="minExperience"
                  value={jobData.minExperience}
                  onChange={handleChange}
                  placeholder="Enter experience (years)"
                />
              </Form.Group>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <Form.Group controlId="formJobHours">
                <Form.Label>
                  <FaClock className="me-2" /> Job Hours
                </Form.Label>
                <Form.Control
                  type="text"
                  name="jobHours"
                  value={jobData.jobHours}
                  onChange={handleChange}
                  placeholder="Enter job hours"
                />
              </Form.Group>
            </Col>
          </Row>

          {/* Third row */}
          <Row className="mb-3">
            <Col xs={12} sm={6} md={4}>
              <Form.Group controlId="formShift">
                <Form.Label>
                  <FaTasks className="me-2" /> Shift
                </Form.Label>
                <Form.Control
                  type="text"
                  name="shift"
                  value={jobData.shift}
                  onChange={handleChange}
                  placeholder="Enter shift details"
                />
              </Form.Group>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <Form.Group controlId="formJobLocation">
                <Form.Label>
                  <FaMapMarkedAlt className="me-2" /> Job Location
                </Form.Label>
                <Form.Control
                  type="text"
                  name="jobLocation"
                  value={jobData.jobLocation}
                  onChange={handleChange}
                  placeholder="Enter job location"
                />
              </Form.Group>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <Form.Group controlId="formMinSalary">
                <Form.Label>
                  <FaDollarSign className="me-2" /> Minimum Salary
                </Form.Label>
                <Form.Control
                  type="text"
                  name="minSalary"
                  value={jobData.minSalary}
                  onChange={handleChange}
                  placeholder="Enter minimum salary"
                />
              </Form.Group>
            </Col>
          </Row>

          {/* Fourth row */}
          <Row className="mb-3">
            <Col xs={12} sm={6} md={4}>
              <Form.Group controlId="formMaxSalary">
                <Form.Label>
                  <FaDollarSign className="me-2" /> Maximum Salary
                </Form.Label>
                <Form.Control
                  type="text"
                  name="maxSalary"
                  value={jobData.maxSalary}
                  onChange={handleChange}
                  placeholder="Enter maximum salary"
                />
              </Form.Group>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <Form.Group controlId="formCompanyFullAddress">
                <Form.Label>
                  <FaLocationArrow className="me-2" /> Company Full Address
                </Form.Label>
                <Form.Control
                  as="textarea"
                  name="companyFullAddress"
                  value={jobData.companyFullAddress}
                  onChange={handleChange}
                  placeholder="Enter company address"
                />
              </Form.Group>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <Form.Group controlId="formRequirements">
                <Form.Label>
                  <FaClipboardList className="me-2" /> Requirements
                </Form.Label>
                <Form.Control
                  as="textarea"
                  name="requirements"
                  value={jobData.requirements}
                  onChange={handleChange}
                  placeholder="Enter job requirements"
                />
              </Form.Group>
            </Col>
          </Row>

          {/* Fifth row */}
          <Row className="mb-3">
            <Col xs={12} sm={6} md={4}>
              <Form.Group controlId="formPositionsByDept">
                <Form.Label>
                  <FaTasks className="me-2" /> Positions by Department
                </Form.Label>
                <Form.Control
                  type="text"
                  name="positionsByDept"
                  value={jobData.positionsByDept}
                  onChange={handleChange}
                  placeholder="Enter positions by department"
                />
              </Form.Group>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <Form.Group controlId="formDeadline">
                <Form.Label>
                  <FaCalendarAlt className="me-2" /> Deadline
                </Form.Label>
                <Form.Control
                  type="date"
                  name="deadline"
                  value={jobData.deadline}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <Form.Group controlId="formFileUpload">
                <Form.Label>
                  <FaFileUpload className="me-2" /> Upload File
                </Form.Label>
                <Form.Control type="file" name="file" onChange={handleChange} />
              </Form.Group>
            </Col>
          </Row>

          {/* Sixth row: Terms acceptance */}
          <Row className="mb-3">
            <Col xs={12}>
              <Form.Group controlId="formTermsAccepted">
                <Form.Check
                  type="checkbox"
                  name="termsAccepted"
                  label={
                    <>
                      <FaCheckCircle className="me-2" />
                      Accept Terms and Conditions
                    </>
                  }
                  checked={jobData.termsAccepted}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>

          {/* Submit button */}
          <Row className="mb-3 d-flex justify-content-center">
            <Col
              xs={12}
              sm={6}
              md={4}
              className="d-flex justify-content-center"
            >
              <button type="submit" className="btn btn-success btn-sm">
                Submit
              </button>
            </Col>
          </Row>
        </Form>
      </div>
    </Container>
  );
};

export default JobPostingForm;
