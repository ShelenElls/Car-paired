import React from 'react';

class ServiceAppointmentForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      owner_name: '',
      date: '',
      time: '',
      reason: '',
      vinnew: '',
      technician: '',
      technicians: [],
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeOwnerName = this.handleChangeOwnerName.bind(this);
    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.handleChangeTime = this.handleChangeTime.bind(this);
    this.handleChangeReason = this.handleChangeReason.bind(this);
    this.handleChangeVins = this.handleChangeVins.bind(this);
    this.handleChangeTechnician = this.handleChangeTechnician.bind(this);
  }

  async componentDidMount() {
    const url = 'http://localhost:8080/api/technician/';
    const response = await fetch(url);
    console.log("preok", response)
    if (response.ok) {
      const data = await response.json();
      this.setState({ technicians: data.technicians });
      console.log("mount", data.technicians)
    }
  }
  async handleSubmit(event) {
    event.preventDefault();
    const data = { ...this.state };
    delete data.appointment;
    delete data.technicians;
    console.log("sub", data)

    const url = 'http://localhost:8080/api/services/';
    const fetchConfig = {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const appointmentResponse = await fetch(url, fetchConfig);
    if (appointmentResponse.ok) {
      this.setState({
      owner_name: '',
      date: '',
      time: '',
      reason: '',
      vinnew: '',
      technician: '',
      })
    }
  }
  handleChangeOwnerName(event){
    const value = event.target.value;
    this.setState({ owner_name: value });
  }
  handleChangeDate(event){
    const value = event.target.value;
    this.setState({ date: value });
  }
  handleChangeTime(event){
    const value = event.target.value;
    this.setState({ time: value });
  }
  handleChangeReason(event){
    const value = event.target.value;
    this.setState({ reason: value });
  }
  handleChangeVins(event){
    const value = event.target.value;
    this.setState({ vinnew: value });
  }
  handleChangeTechnician(event){
    const value = event.target.value;
    this.setState({ technician: value });
  }

  render(){
    return (
      <div className='row'>
        <div className='col col-sm-auto'>
          <form className='{formClasses}' onSubmit={this.handleSubmit} id="create-appointment-form">
            <h1 className='card-title'>Enter New Appointment</h1>
            <div className="mb-3">
            <b>Please complete all the following fields.</b>

            <p>Select a technician 
            from the available technicians.
            This vin field is to enter a <i>new</i> instance of a VIN. If you need to verify if this client
            is a VIP, please use the appointment history form to verify. </p> </div>
            <div className="col">
              <div className="form-floating mb-3">
                <input value={this.state.owner_name} onChange={this.handleChangeOwnerName} required placeholder="Owner Name" type="text" id="owner_name" name="owner_name" className="form-control" />
                <label htmlFor="">Owner Name</label>
              </div>
            </div>
            <div className="col">
              <div className="form-floating mb-3">
                <input value={this.state.date} onChange={this.handleChangeDate} required placeholder="date" type="text" id="date" name="date" className="form-control" />
                <label htmlFor="">Date</label>
              </div>
            </div>
            <div className="col">
              <div className="form-floating mb-3">
                <input value={this.state.time} onChange={this.handleChangeTime} required placeholder="time" type="text" id="time" name="time" className="form-control" />
                <label htmlFor="">Time</label>
              </div>
            </div>
            <div className="col">
              <div className="form-floating mb-3">
                <textarea value={this.state.reason} onChange={this.handleChangeReason} required placeholder="reason" type="text" id="reason" name="reason" className="form-control"></textarea>
                <label htmlFor="reason">Reason for Appointment</label>
              </div>
            </div>
            <div className="col">
              <div className="form-floating mb-3">
                <input value={this.state.vinnew} onChange={this.handleChangeVins} required placeholder="vinnew" type="text" id="vinnew" name="vinnew" className="form-control" />
                <label htmlFor="">Input Vin Number</label>
              </div>
            </div>
            <div className="col">
              <div className="form-floating mb-3">
                <select value={this.state.technician} onChange={this.handleChangeTechnician} required placeholder="technician" id="technician" className="form-control">
                  <option value="">Select a Technician</option>
                  {this.state.technicians.map(technician => {
                      return (
                        <option key={technician.id} value={technician.id}>
                          {technician.name}
                        </option>
                      );
                    })}
                </select>
              </div>
            </div>
            <button className="btn btn-lg btn-primary">Add Appointment</button> 
          </form>
        </div>
      </div>
    )

  }

}
export default ServiceAppointmentForm;