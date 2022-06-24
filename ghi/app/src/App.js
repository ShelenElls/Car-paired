import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import TechnicianForm from './TechnicianForm';
import ServiceAppointmentForm from './ServiceAppointmentForm';
import ServiceHistory from './ServiceHistory';
import AppointmentList from './AppointmentList';
import ManufacturersList from './ManufacturersList';
import ManufacturerForm from './ManufacturerForm';
import VehicleModels from './VehicleModels';
import VehicleModelForm from './VehicleModelForm';
import SalesPersonForm from './SalesPersonForm';
import ListAutomobiles from './AutomobilesInventory';
import React from 'react';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appointmentlist: [],
      servicehistory: [],
      manufacturelist: [],
      automobilelist: [],
    }
    this.appointmentlist = this.appointmentlist.bind(this);
    this.servicehistory = this.servicehistory.bind(this);
    this.manufacturelist = this.manufacturelist.bind(this);
    this.automobilelist = this.automobilelist.bind(this);
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

  async manufacturelist() {
    const responsemanufacturer = await fetch('http://localhost:8100/api/manufacturers/');
    if (responsemanufacturer.ok) {
      const data = await responsemanufacturer.json();
      console.log("man", data)
      this.setState({manufacturelist: data.manufacturers})
    }
  }

  async automobilelist() {
    const automobileresponse =await fetch('http://localhost:8100/api/models/')
    if (automobileresponse.ok) {
      const data = await automobileresponse.json();
      console.log("autodata", data)
      this.setState({automobilelist: data.models})
    }
  }
  
  componentDidMount() {
    this.appointmentlist()
    this.servicehistory()
    this.manufacturelist()
    this.automobilelist()
  }
  render() {
    return (
      <BrowserRouter>
        <Nav />
        <div className="container">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="manufacturers/new/" element={<ManufacturerForm />} />
            <Route path="manufacturers/" element={<ManufacturersList manufacturers={this.state.manufacturelist} />} />
            <Route path="models/new/" element={<VehicleModelForm />} />
            <Route path="models/" element={<VehicleModels autos={this.state.automobilelist} />} />
            <Route path="technician/" element={<TechnicianForm />} />
            <Route path="services/" element={<AppointmentList service={this.state.appointmentlist} />} />
            <Route path="services/new" element={<ServiceAppointmentForm />} />
            <Route path="services/history" element={<ServiceHistory history={this.state.servicehistory} />} />
            <Route path="salesperson/new" element={<SalesPersonForm />} />
            <Route path="automobiles" element={<ListAutomobiles />} />
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