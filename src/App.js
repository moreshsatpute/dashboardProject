import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import NavbarHeader from './components/NavbarHeader';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';

import ClientForm from './pages/ClientForm';
import BasicForm from './pages/BasicForm';

function App() {
  return (
    <Router>
      <div className="container-fluid vh-100 d-flex flex-column">
        {/* Full-Height Layout */}
        <div className="row flex-grow-1">
          {/* Sidebar */}
          <div className="col-3 bg-light p-0 vh-100 d-flex flex-column">
            <Sidebar />
          </div>

          {/* Main Content Area */}
          <div className="col-9 p-0 d-flex flex-column">
            {/* Navbar */}
            <div>
              <NavbarHeader />
            </div>

            {/* Main Panel with Routing */}
            <div className="flex-grow-1 p-3">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/client-form" element={<ClientForm />} />
                <Route path="/basic-form" element={<BasicForm />} />
              </Routes>
            </div>

            {/* Footer */}
            <div>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
