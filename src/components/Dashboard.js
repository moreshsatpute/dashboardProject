import React from "react";
import { Card, ProgressBar, Button, Dropdown } from "react-bootstrap";
// import Panels from "./Panel";

const Dashboard = () => {
  return (
    <div className="container">
      <div className="page-inner">
        {/* Header Section */}
        <div className="d-flex align-items-left align-items-md-center flex-column flex-md-row pt-2 pb-4">
          <div>
            <h3 className="fw-bold mb-3">Dashboard</h3>
            <h6 className="op-7 mb-2">Free Bootstrap 5 Admin Dashboard</h6>
          </div>
          <div className="ms-md-auto py-2 py-md-0">
            <Button variant="info" className="me-2 rounded-pill">
              Manage
            </Button>
            <Button variant="primary" className="rounded-pill">
              Add Customer
            </Button>
          </div>
        </div>
        {/* Add panal */}
        {/* <Panels/> */}

        {/* Statistics Section */}
        <div className="row">
          <div className="col-md-8">
            <Card>
              <Card.Header className="d-flex justify-content-between">
                <div>User Statistics</div>
                <div>
                  <Button variant="success" size="sm" className="me-2 rounded-pill">
                    Export
                  </Button>
                  <Button variant="info" size="sm" className="rounded-pill">
                    Print
                  </Button>
                </div>
              </Card.Header>
              <Card.Body>
                <div style={{ minHeight: "375px" }}>
                  <canvas id="statisticsChart"></canvas>
                </div>
              </Card.Body>
            </Card>
          </div>

          <div className="col-md-4">
            <Card>
              <Card.Header className="d-flex justify-content-between">
                <div>Daily Sales</div>
                <Dropdown>
                  <Dropdown.Toggle variant="light" size="sm">
                    Export
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>Action</Dropdown.Item>
                    <Dropdown.Item>Another Action</Dropdown.Item>
                    <Dropdown.Item>Something Else Here</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Card.Header>
              <Card.Body>
                <div className="mb-4 mt-2">
                  <h1>$4,578.58</h1>
                </div>
                <canvas id="dailySalesChart"></canvas>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <div className="h1 fw-bold float-end text-primary">+5%</div>
                <h2 className="mb-2">17</h2>
                <p className="text-muted">Users online</p>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
