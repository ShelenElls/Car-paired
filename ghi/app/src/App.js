import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import TechnicianForm from './TechnicianForm';
import ServiceAppointmentForm from './ServiceAppointmentForm';
import ServiceHistory from './ServiceHistory';
import AppointmentList from './AppointmentList';
import ManufacturersList from './ManufacturersList';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appointmentlist: [],
      servicehistory: [],
    }
    this.appointmentlist = this.appointmentlist.bind(this);
    this.servicehistory = this.servicehistory.bind(this);
  }

  async appointmentlist() {
    const responseapt = await fetch('http://localhost:8080/api/services/');
    if (responseapt.ok) {
      const data = await responseapt.json();
      console.log("apt", data)
      this.setState({ 
        appointmentlist: data.service
      })
    }
  }

  async servicehistory() {
    const responsehx = await fetch('http://localhost:8080/api/services/history/');
    if (responsehx.ok) {
      const data = await responsehx.json();
      console.log("hst", data)
      this.setState({servicehistory: data})
    }
  }
  
  componentDidMount() {
    this.appointmentlist()
    this.servicehistory()
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
            <Route path="services/history" element={<ServiceHistory history={this.state.servicehistory} />} />
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