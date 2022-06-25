import React from 'react';

class SalesRecordForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            vin: '',
            sales_person: '',
            customer: '',
            sales_price: '',
            customers: [],
            sales_persons: [],
            vins: [],
        };
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChangeVin = this.handleChangeVin.bind(this);
        this.handleChangeSalesPrice = this.handleChangeSalesPrice.bind(this);
        this.handleChangeSalesPerson = this.handleChangeSalesPerson.bind(this);
        this.handleChangeCustomer = this.handleChangeCustomer.bind(this);
    }

    //event handlers
    handleChangeVin(event) {
        const value = event.target.value
        this.setState({ vin: value })
    }
    handleChangeCustomer(event) {
        const value = event.target.value
        this.setState({ customer: value })
    }
    handleChangeSalesPerson(event) {
        const value = event.target.value
        this.setState({ sales_person: value })
    }
    handleChangeSalesPrice(event) {
        const value = event.target.value
        this.setState({sales_price: value })
    }
    // submit handler
    async handleSubmit(event) {
        event.preventDefault();
        const data = {...this.state};
        delete data.customers;
        delete data.vins;
        delete data.sales_person;
        const salesRecordUrl = 'http://localhost:8090/api/salesrecords/';
        const fetchConfig = {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const response = await fetch(salesRecordUrl, fetchConfig);
        if (response.ok) {
            const newSalesRecord = await response.json();
            this.setState({
                vin: '',
                sales_person: '',
                customer: '',
                sales_price: '',
            });
        }
    }
    // component mount
    async componentDidMount() {
        const customerUrl = 'http://localhost:8090/api/customers/'
        const customerResponse = await fetch(customerUrl);
        if (customerResponse.ok) {
            const data = await customerResponse.json();
            console.log("customer mount", data.customer)
            this.setState({ customers: data.customer })
        }

        const salesPersonUrl = 'http://localhost:8090/api/salesperson/'
        const salesPersonResponse = await fetch(salesPersonUrl);
        if (salesPersonResponse.ok) {
            const data = await salesPersonResponse.json();
            console.log("sales person mount", data.salesperson)
            this.setState({ sales_persons: data.salesperson})
        }

        const vinUrl = 'http://localhost:8100/api/automobiles/'
        const vinResponse = await fetch(vinUrl);
        if (vinResponse.ok) {
            const data = await vinResponse.json();
            console.log("vin mount", data)
            this.setState({ vins: data.autos })
        }
    }


    // render 
    render () {
        return (
            <div className="my-5 container">
                <div className="offset-3 col-6">
                    <div className="shadow p-4 mt-4">
                        <h1>New Sales Record</h1>
                        <form onSubmit={this.handleSubmit} id="create-salesrecord-form">
                            <div className="mb-3">
                                <select onChange={this.handleChangeVin} required id="vin" name="vin" className="form-select">
                                    <option value="">Choose vin</option>
                                    {this.state.vins.map(v => {
                                        return (
                                            <option key={v.id} value={v.id}>{v.vin}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className="mb-3">
                                <select onChange={this.handleChangeSalesPerson} required id="sales_person" name="sales_person" className="form-select">
                                    <option value="">Choose Sales Person</option>
                                    {this.state.sales_persons.map(sp => {
                                        return (
                                            <option key={sp.id} value={sp.name}>{sp.name}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className="mb-3">
                                <select onChange={this.handleChangeCustomer} required id="customer" name="customer" className="form-select">
                                    <option value="">Choose Customer</option>
                                    {this.state.customers.map(c => {
                                        return (
                                            <option key={c.id} value={c.name}>{c.name}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={this.handleChangeSalesPrice} placeholder="SalesPrice" required type='number' name='salesprice' id='salesprice' className='form-control' />
                                <label htmlFor="salesprice">Sales Price</label>    
                            </div>
                            <button className="btn btn-primary">Add Sales Record</button>
                        </form>
                    </div>
                </div>
            </div> 
        )
    }
}
export default SalesRecordForm