import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Sidebar from './components/Sidebar';
import NavbarHeader from './components/NavbarHeader';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import ClientForm from './pages/ClientForm';
import BasicForm from './pages/BasicForm';
import JobDescriptionPage from './pages/JobDescriptionPage';
import LoginModal from './components/LoginModal';
import RegistrationPage from './components/RegistrationPage';
import { Button } from 'react-bootstrap';

function App() {
    const [showLogin, setShowLogin] = useState(false);

    const handleLoginOpen = () => setShowLogin(true);
    const handleLoginClose = () => setShowLogin(false);

    return (
        <Router>
            <div className="container-fluid vh-100 d-flex flex-column">
                {/* Full-Height Layout */}
                <div className="row flex-grow-1">
                    {/* Sidebar - collapsed on small screens */}
                    <div className="col-12 col-md-3 bg-light p-0 vh-100 d-flex flex-column">
                        <Sidebar />
                    </div>

                    {/* Main Content Area */}
                    <div className="col-12 col-md-9 p-0 d-flex flex-column">
                        {/* Navbar */}
                        <div>
                            <NavbarHeader />
                        </div>

                        {/* Main Panel with Routing */}
                        <div className="flex-grow-1 p-3">
                            <div className="d-flex justify-content-end mb-3">
                                <Button variant="primary" onClick={handleLoginOpen} className="me-2">
                                    Log In
                                </Button>
                                <Button variant="secondary" href="/register">
                                    Register
                                </Button>
                            </div>

                            <Routes>
                                <Route path="/" element={<Dashboard />} />
                                <Route path="/dashboard" element={<Dashboard />} />
                                <Route path="/client-form" element={<ClientForm />} />
                                <Route path="/basic-form" element={<BasicForm />} />
                                <Route path="/job-description" element={<JobDescriptionPage />} />
                                <Route path="/register" element={<RegistrationPage />} />
                                {/* Handle unmatched routes */}
                                <Route path="*" element={<h2>404 - Page Not Found</h2>} />
                            </Routes>
                        </div>

                        {/* Footer */}
                        <div>
                            <Footer />
                        </div>
                    </div>
                </div>
            </div>

            {/* Login Modal */}
            <LoginModal show={showLogin} handleClose={handleLoginClose} />
        </Router>
    );
}

export default App;
