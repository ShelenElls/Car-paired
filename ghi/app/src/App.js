import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import TechnicianForm from './TechnicianForm';
import ServiceAppointmentForm from './ServiceAppointmentForm';
import ServiceHistoryForm from './ServiceHistory';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="technician/" element={<TechnicianForm />} />
          <Route path="services/" element={<ServiceAppointmentForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
