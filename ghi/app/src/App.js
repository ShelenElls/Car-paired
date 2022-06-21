import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import TechnicianForm from './TechnicianForm';
import ServiceAppointmentForm from './ServiceAppointmentForm';
import ServiceHistoryForm from './ServiceHistory';
import AppointmentList from './AppointmentList';
import ManufacturersList from './ManufacturersList';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appointmentlist: [],
    }
    this.appointmentlist = this.appointmentlist.bind(this);
  }

  async appointmentlist() {
    const response = await fetch('http://localhost:8080/api/services/');
    if (response.ok) {
      const data = await response.json();
      console.log("apt", data)
      this.setState({ 
        appointmentlist: data.service
      })
    }
  }
  
  componentDidMount() {
    this.appointmentlist()
  }
  render() {
    return (
      <BrowserRouter>
        <Nav />
        <div className="container">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="technician/" element={<TechnicianForm />} />
            <Route path="services/" element={<AppointmentList service={this.state.appointmentlist} />} />
            <Route path="services/new" element={<ServiceAppointmentForm />} />
            {/* <Route path="services/history" element={<ServiceHistoryForm historyService={historyService} />} /> */}
          </Routes>
        </div>
      </BrowserRouter>
    )
  }

}
export default App;


// after manufacture props added/ got a map error on appointment list 
// turn it into a class - turn apps into state- 



// async function AppointmentList() {
//   const response = await fetch('http://localhost:8080/api/services/');
//   if (response.ok) {
//     const data = await response.json();
//     root.render(
//       <React.StrictMode>
//         <App service={data.service} />
//       </React.StrictMode>
//     );
//   }
// }
// AppointmentList();

// && props.manufacturers === undefined (manufacturers={props.manufacturers}) <Route path='manufacturers/' element={<ManufacturersList />} />