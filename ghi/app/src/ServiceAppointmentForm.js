import React from 'react';

class ServiceAppointmentForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      ownerName: '',
      date: '',
      time: '',
      reason: '',
      vinNum: '',
      technician: [],
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeOwnerName = this.handleChangeOwnerName.bind(this);
    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.handleChangeTime = this.handleChangeTime.bind(this);
    this.handleChangeReason = this.handleChangeReason.bind(this);
    this.handleChangeVinNum = this.handleChangeVinNum.bind(this);
    this.handleChangeTechnician = this.handleChangeTechnician.bind(this);
  }
  async handleSubmit(event) {
    event.preventDefault();
    const data = { ...this.state };
    data.owner_name = data.ownerName;
    data.vins = data.vinNum;
    delete data.vinNum;
    delete data.ownerName;
    delete data.hasCreated;
    delete data.appointment;
    delete data.technician;

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
      ownerName: '',
      date: '',
      time: '',
      reason: '',
      vinNum: '',
      technician: '',
      })
    }
  }
  handleChangeOwnerName(event){
    const value = event.target.value;
    this.setState({ ownerName: value });
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
  handleChangeVinNum(event){
    const value = event.target.value;
    this.setState({ vinNum: value });
  }
  handleChangeTechnician(event){
    const value = event.target.value;
    this.setState({ technician: value });
  }
  async componentDidMount() {
    const url = 'http://localhost:8080/api/technician/';
    const response = await fetch(url);
    console.log(response)
    if (response.ok) {
      const data = await response.json();
      this.setState({ technician: data.technician });
      console.log("mount", data.technician)
    }
  }
  render(){
    return (
      <div className='row'>
        <div className='col col-sm-auto'>
          <form className='{formClasses}' onSubmit={this.handleSubmit} id="create-appointment-form">
            <h1 className='card-title'>Enter New Appointment</h1>
            <p className="mb-3">Please complete all the following fields.
             Select a technician 
            from the available technicians. </p>
            <div className="col">
              <div className="form-floating mb-3">
                <input onChange={this.handleChangeOwnerName} required type="text" id="ownerName" name="ownerName" className="form-control" />
                <label htmlFor="">Owner Name</label>
              </div>
            </div>
            <div className="col">
              <div className="form-floating mb-3">
                <input onChange={this.handleChangeDate} required placeholder="date" type="text" id="date" name="date" className="form-control" />
                <label htmlFor="">Date</label>
              </div>
            </div>
            <div className="col">
              <div className="form-floating mb-3">
                <input onChange={this.handleChangeDate} required placeholder="time" type="text" id="time" name="time" className="form-control" />
                <label htmlFor="">Time</label>
              </div>
            </div>
            <div className="col">
              <div className="form-floating mb-3">
                <textarea onChange={this.handleChangeReason} required placeholder="reason" type="text" id="reason" name="reason" className="form-control"></textarea>
                <label htmlFor="reason">Reason for Appointment</label>
              </div>
            </div>
            <div className="col">
              <div className="form-floating mb-3">
                <input onChange={this.handleChangeVinNum} required placeholder="vinnum" type="text" id="vinNum" name="vinNum" className="form-control" />
                <label htmlFor="">Input Vin Number</label>
              </div>
            </div>
            <div className="col">
              <div className="form-floating mb-3">
                <select onChange={this.handleChangeTechnician} required placeholder="technician" id="technician" className="form-control">
                  <option value="">Select a Technician</option>
                  {this.state.technician.map(tech => {
                      return (
                        <option key={tech.num} value={tech.num}>
                          {tech.name}
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