import React, { useState } from 'react';
import { Modal, Button, Form, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const LoginModal = ({ show, handleClose, handleRegisterNavigate }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [loginError, setLoginError] = useState(false); // For displaying error message
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleLogin = (e) => {
        e.preventDefault();
    
        const { email, password } = formData;
    
        // Get users from localStorage
        const users = JSON.parse(localStorage.getItem('users')) || [];
    
        // Check if user exists with matching credentials
        const user = users.find(user => user.email === email && user.password === password);
    
        if (user) {
            console.log('Login Successful');
            handleClose(); // Close modal
            navigate('/dashboard'); // Navigate to the dashboard or main application
        } else {
            console.log('Login Unsuccessful');
            setLoginError(true); // Display error message
    
            // Hide the error message after 1 second
            setTimeout(() => setLoginError(false), 1000);
        }
    };
    
    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header>
                <Modal.Title>Log In</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleLogin}>
                    {loginError && <Alert variant="danger">Invalid email or password. Please try again.</Alert>}
                    <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <div className="d-flex justify-content-between align-items-center">
                        <Button className="btn btn-success btn-sm" variant="primary" type="submit">
                            Log In
                        </Button>
                        <Button
                            className="btn btn-success btn-sm"
                            onClick={handleRegisterNavigate} // Trigger the registration modal
                        >
                            Register
                        </Button>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default LoginModal;