import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import NavbarHeader from './components/NavbarHeader';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import ClientForm from './pages/ClientForm';
import BasicForm from './pages/BasicForm';
import JobDescriptionPage from './pages/JobDescriptionPage.js';
import RegistrationPage from './components/RegistrationPage';
import JobPostingForm from './pages/JobPostingForm';
import CandidateForm from './pages/CandidateForm.js';
import FranchiseForm from './pages/FranchiseForm.js';

function App() {
    return (
        <Router>
            <div className="container-fluid vh-100 d-flex flex-column">
                {/* Full-Height Layout */}
                <div className="row flex-grow-1">
                    {/* Sidebar */}
                    <div className="col-2 bg-light p-0 vh-100 position-fixed">
                        <Sidebar />
                    </div>

                    {/* Main Content Area */}
                    <div className="col-10 offset-2 d-flex flex-column p-0">
                        {/* Navbar */}
                        <div className="sticky-top bg-white border-bottom">
                            <NavbarHeader />
                        </div>

                        {/* Scrollable Content Panel */}
                        <div className="flex-grow-1 overflow-auto bg-light">
                            <Routes>
                                <Route path="/" element={<Dashboard />} />
                                <Route path="/dashboard" element={<Dashboard />} />
                                <Route path="/client-form" element={<ClientForm />} />
                                <Route path="/basic-form" element={<BasicForm />} />
                                <Route path="/Job-Description" element={<JobDescriptionPage />} />
                                <Route path="/Job-Posting" element={<JobPostingForm />} />
                                <Route path="/register" element={<RegistrationPage />} />
                                <Route path="/Candidate-Form" element={<CandidateForm />} />
                                <Route path="/Franchise-Form" element={<FranchiseForm />} />


                                {/* Handle unmatched routes */}
                                <Route path="*" element={<h2>404 - Page Not Found</h2>} />
                            </Routes>
                        </div>

                        {/* Footer */}
                        <div className="bg-white border-top">
                            <Footer />
                        </div>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;
