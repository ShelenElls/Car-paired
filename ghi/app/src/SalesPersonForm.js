import React from 'react';

class SalesPersonForm extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
              name: '',
              employeeId: '',
            }
            this.handleSubmit = this.handleSubmit.bind(this);
            this.handleChangeName = this.handleChangeName.bind(this);
            this.handleChangeEmployeeNumber = this.handleChangeEmployeeNumber.bind(this);
    }

    // async componentDidMount() {
    //     const url = 'http://localhost:8100/api/models/'
    //     const response = await fetch(url);
    //     if (response.ok) {
    //         const data = await response.json();
    //         this.setState({ model_ids: data.models })
    //     }
    // }

    // // handleChange functions // 
    // handleChangeVin(event) {
    //     const value = event.target.value
    //     this.setState({ vin: value })
    // }
    // handleChangeColor(event) {
    //     const value = event.target.value
    //     this.setState({ color: value })
    // }
    // handleChangeYear(event) {
    //     const value = event.target.value
    //     this.setState({ year: value })
    // }
    // handleChangeModel(event) {
    //     const value = event.target.value
    //     this.setState({ model_id: value })
    // }

    // // Handle Submit //
    // async handleSubmit(event) {
    //     event.preventDefault()
    //     const data = {...this.state}
    //     delete data.model_ids
    //     console.log(data)
    //     const url = 'http://localhost:8100/api/automobiles/'
    //     const fetchConfig = {
    //         method: 'post',
    //         body: JSON.stringify(data),
    //         headers : {
    //             'Content-Type': 'application/json',
    //         },
    //     };
    //     const response = await fetch(url, fetchConfig);
    //     if (response.ok) {
    //         const newAutomobile = await response.json()
    //         console.log(newAutomobile)
    //         this.setState({
    //             vin: '',
    //             color: '',
    //             year: '',
    //             model_id: '',
    //         })
    //     }
    // }

    render() {
        return (
            <div className="px-4 py-5 my-5 text-center">
              <h1 className="display-5 fw-bold">Create an Sales Person</h1>
              <form onSubmit={this.handleSubmit} id='create-salesperson-form'>
                <div className="form-floating mb-3">
                    <input onChange={this.handleChangeName} name='name' requiredtype='text' id='name' className='form-control' />
                    <label htmlFor='name'>Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input onChange={this.handleChangeEmployeeNumber}  name='employeenumber' type='text' id='employeenumber' className='form-control' />
                  <label htmlFor='employeenumber'>Employee Number</label>
                </div>
                  <button className="btn btn-primary">Add SalesPerson</button>
              </form>
            </div>            
        );
    }
}
export default SalesPersonForm;
