import React from 'react';

class SalesPersonForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      employee_num: '',
      hasCreated: false,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeSalesPersonId = this.handleChangeSalesPersonId.bind(this);
  }
  async handleSubmit(event) {
    event.preventDefault();
    const data = { ...this.state };
    data.employee_number = data.salesPersonId;
    delete data.salesPersonId;
    delete data.hasCreated;
    delete data.sales_person;

    const url = 'http://localhost:8090/api/sales_person/';
    const fetchConfig = {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    console.log(data)
    const salesPersonResponse = await fetch(url, fetchConfig);
    if (salesPersonResponse.ok) {
      this.setState({
        name: '',
        employeeNum: '',
      })
    }
  }
  handleChangeName(event) {
    const value = event.target.value;
    this.setState({ name: value });
  }
  handleChangeemployeeId(event) {
    const value = event.target.value;
    this.setState({ employeeNum: value });
  }
  async componentDidMount() {
    const url = 'http://localhost:8090/api/salesperson';
    const response = await fetch(url);
    console.log(response)
    if (response.ok) {
      const data = await response.json();
      this.setState({ sales_person: data.sales_person });
      console.log("mount", data.sales_person)
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
          <form className='{formClasses}' onSubmit={this.handleSubmit} id="create-salesperson-form">
            <h1 className='card-title'>Enter New Sales Person</h1>
            <p className="mb-3">First and Last Name </p>
            <div className="col">
              <div className="form-floating mb-3">
                <input onChange={this.handleChangeName} required placeholder="name" type="text" id="name" name="name" className="form-control" />
                <label htmlFor="name">Name</label>
              </div>
            </div>
            <div className="col">
              <div className="form-floating mb-3">
                <input onChange={this.handleChangesalesPersonId} required placeholder="salesPersonsId" type="number" id="salesPersonsId" name="salesPersonsId" className="form-control" />
                <label htmlFor="">Sales Person's ID </label>
              </div>
            </div>
            <button className="btn btn-lg btn-primary">Add Sales Person</button> 
          </form>
          <div className={messageClasses} id="success-message">
                  Sales Person Added
                </div>
        </div>
      </div>
    )
  }

}
export default SalesPersonForm;