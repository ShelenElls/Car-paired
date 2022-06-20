import React from 'react';

class TechnicianForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      employeeId: '',
      hasCreated: false,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeemployeeId = this.handleChangeemployeeId.bind(this);
  }
  async handleSubmit(event) {
    event.preventDefault();
    const data = { ...this.state };
    data.employee_number = data.employeeId;
    delete data.employeeId;
    delete data.hasCreated;
    delete data.technician;

    const url = 'http://localhost:8080/api/technician/';
    const fetchConfig = {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    console.log(data)
    const employeeResponse = await fetch(url, fetchConfig);
    if (employeeResponse.ok) {
      this.setState({
        name: '',
        employeeId: '',
        hasCreated: true,
      })
    }
  }
  handleChangeName(event) {
    const value = event.target.value;
    this.setState({ name: value });
  }
  handleChangeemployeeId(event) {
    const value = event.target.value;
    this.setState({ employeeId: value });
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

  render() {
    let messageClasses = 'alert alert-success d-none mb-0';
    let formClasses = '';
    if (this.state.hasCreated) {
      messageClasses = 'alert alert-success mb-0';
      formClasses = 'd-none';
    }
    return (
      <div className='row'>
        <div className='col col-sm-auto'>
          <form className='{formClasses}' onSubmit={this.handleSubmit} id="create-employee-form">
            <h1 className='card-title'>Enter New Employee</h1>
            <p className="mb-3">Please enter first and last name on the Name
              selection followed by employee's ID number.</p>
            <div className="col">
              <div className="form-floating mb-3">
                <input onChange={this.handleChangeName} required placeholder="full name" type="text" id="name" name="name" className="form-control" />
                <label htmlFor="name">Full Name</label>
              </div>
            </div>
            <div className="col">
              <div className="form-floating mb-3">
                <input onChange={this.handleChangeemployeeId} required placeholder="employeeId" type="number" id="employeeId" name="employeeId" className="form-control" />
                <label htmlFor="">ID Number</label>
              </div>
            </div>
            <button className="btn btn-lg btn-primary">Add Employee</button> 
          </form>
          <div className={messageClasses} id="success-message">
                  Employee Added
                </div>
        </div>
      </div>
    )
  }

}
export default TechnicianForm;




// technician has a get/post/and delete
// parameters are name and employee_number
// employee_number is the value and id key
// need a true/false to show a success message?
// url is http://localhost:8080/api/technician/







