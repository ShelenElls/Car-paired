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
import FormAutos from './AutomobileInventoryForm';
import CustomerForm from './CustomerForm';
import SalesRecordList from './SalesRecordList';
import React from 'react';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appointmentlist: [],
      servicehistory: [],
      manufacturelist: [],
      automobilelist: [],
      listautos: [],
      salesrecords: [],
    }
    this.appointmentlist = this.appointmentlist.bind(this);
    this.servicehistory = this.servicehistory.bind(this);
    this.manufacturelist = this.manufacturelist.bind(this);
    this.automobilelist = this.automobilelist.bind(this);
    this.listautos = this.listautos.bind(this);
    this.salesrecords = this.salesrecords.bind(this);
  }



  async appointmentlist() {
    const responseapt = await fetch('http://localhost:8080/api/services/');
    if (responseapt.ok) {
      const data = await responseapt.json();
      this.setState({ 
        appointmentlist: data.service
      })
    }
  }

  async listautos() {
    const responseautos = await fetch('http://localhost:8100/api/automobiles/');
    if (responseautos.ok) {
      const data = await responseautos.json();
      this.setState({listautos: data.autos})
    }
  }

  async salesrecords() {
    const srresponse = await fetch('http://localhost:8090/api/sales_records/');
    if (srresponse.ok) {
      const data = await srresponse.json();
      console.log("sales_records", data)
      this.setState({salesrecords: data.sales_records})
    }
  }

  async servicehistory() {
    const responsehx = await fetch('http://localhost:8080/api/services/history/');
    if (responsehx.ok) {
      const data = await responsehx.json();
      this.setState({servicehistory: data})
    }
  }

  async manufacturelist() {
    const responsemanufacturer = await fetch('http://localhost:8100/api/manufacturers/');
    if (responsemanufacturer.ok) {
      const data = await responsemanufacturer.json();
      this.setState({manufacturelist: data.manufacturers})
    }
  }

  async automobilelist() {
    const automobileresponse =await fetch('http://localhost:8100/api/models/')
    if (automobileresponse.ok) {
      const data = await automobileresponse.json();
      this.setState({automobilelist: data.models})
    }
  }
  
  componentDidMount() {
    this.appointmentlist()
    this.servicehistory()
    this.manufacturelist()
    this.automobilelist()
    this.listautos()
    this.salesrecords()
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
            <Route path="salesperson/new/" element={<SalesPersonForm />} />
            <Route path="automobiles/" element={<ListAutomobiles auto={this.state.listautos} />} />
            <Route path="automobiles/new" element={<FormAutos />} />
            <Route path="customers/new/" element={<CustomerForm />} />
            <Route path="salesrecords/" element={<SalesRecordList sales_record={this.state.salesrecords} />} />
          </Routes>
        </div>
      </BrowserRouter>
    )
  }

}
export default App;

