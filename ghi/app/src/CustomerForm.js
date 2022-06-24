import React from 'react';

class CustomerForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            address: '',
            phone_number: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeAddress = this.handleChangeAddress.bind(this);
        this.handleChangePhoneNumber = this.handleChangePhoneNumber.bind(this);
    }

  // Handle Submit //
    async handleSubmit(event) {
        event.preventDefault();
        const data = {...this.state};
        console.log(data)

        const url = 'http://localhost:8090/api/customers/'
        const fetchConfig = {
            method: 'post',
            body: JSON.stringify(data),
            headers : {
                'Content-Type': 'application/json',
            },
        };
       
        const response = await fetch(url, fetchConfig);
        console.log(response)
        if (response.ok) {
            const cleared = {
                name: '',
                address: '',
                phone_number: '',
            }
            this.setState(cleared)
        }
    }

    // handleChange functions // 
    handleChangeName(event) {
        const value = event.target.value
        this.setState({name: value})
    }
    handleChangeAddress(event) {
        const value = event.target.value
        this.setState({address: value})
    }
    handleChangePhoneNumber(event) {
        const value = event.target.value
        this.setState({phone_number: value})
    }


    render() {
        return (
            <div className="px-4 py-5 my-5 text-center">
                <h1 className="display-5 fw-bold">Create a Potential Customer</h1>
                <form onSubmit={this.handleSubmit} id='create-customer-form'>
                <div className="form-floating mb-3">
                    <input onChange={this.handleChangeName} name='name' requiredtype='text' id='name' className='form-control' />
                    <label htmlFor='name'>Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input onChange={this.handleChangeAddress}  name='address' type='text' id='address' className='form-control' />
                    <label htmlFor='address'>Address</label>
                </div>
                <div className="form-floating mb-3">
                    <input onChange={this.handleChangePhoneNumber}  name='phone_number' type='text' id='phone_number' className='form-control' />
                    <label htmlFor='phone_number'>Phone Number</label>
                </div>
                <button className="btn btn-primary">Add SalesPerson</button>
                </form>
            </div>            
        );
    }
}
export default CustomerForm;
