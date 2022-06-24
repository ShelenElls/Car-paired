import React from 'react';

class SalesPersonForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            employee_num: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeEmployeeNumber = this.handleChangeEmployeeNumber.bind(this);
    }

    async handleSubmit(event) {
        event.preventDefault();
        const data = {...this.state};
        console.log(data)

        const url = 'http://localhost:8090/api/salesperson/'
        const fetchConfig = {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const response = await fetch(url, fetchConfig);
        if (response.ok) {
            const cleared = {
                name: '',
                employee_num: '',
            }
            this.setState(cleared)
        }
    }
    handleChangeName(event) {
        const value = event.target.value
        this.setState({ name : value })
    }
    handleChangeEmployeeNumber(event) {
        const value = event.target.value
        this.setState({ employee_num : value })
    }

    render () {
        return (
            <div className="px-4 py-5 my-5 text-center">
                <h1 className="display-5 fw-bold">Create Sales Person</h1>
                <form onSubmit={this.handleSubmit} id='create-salesperson-form'>
                    <div className="form-floating mb-3">
                        <input onChange={this.handleChangeName} name='name' requiredtype='text' id='name' className='form-control' />
                        <label htmlFor='name'>Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input onChange={this.handleChangeEmployeeNumber} name='employeenumber' requiredtype='number' id='employeenumber' className='form-control' />
                        <label htmlFor='employeenumber'>Employee Number</label>
                    </div>
                    <button className="btn btn-primary">Add Sales Person</button>
                </form>
            </div>
        );
    }
}
export default SalesPersonForm