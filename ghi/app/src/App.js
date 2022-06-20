import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import TechnicianForm from './TechnicianForm';
import ServiceAppointmentForm from './ServiceAppointmentForm';
import ServiceHistoryForm from './ServiceHistory';
import AppointmentList from './AppointmentList';
import AppointmentDetails from './AppointmentDetails';

function App(props) {
  if (props.service === undefined) {
    return null;
  }
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="technician/" element={<TechnicianForm />} />
          <Route path="services/" element={<AppointmentList service={props.service}/>} />
          <Route path="services/details" element={<AppointmentDetails />} />
          <Route path="services/new" element={<ServiceAppointmentForm />} />
          <Route path="services/history" element={<ServiceHistoryForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
