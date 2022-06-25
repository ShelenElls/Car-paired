import React from 'react';

class SalesHistory extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            salesperson: '',
            salespersons: [],
            salesrecords: [],
        };
        this.handleChange=this.handleChange.bind(this);
    }

    async componentDidMount() {
        const salesPersonUrl = 'http://localhost:8090/api/salesperson/'
        const salesPersonResponse = await fetch(salesPersonUrl);
        if (salesPersonResponse.ok) {
            const data = await salesPersonResponse.json();
            console.log(data)
            this.setState({ salespersons: data.salesperson})
        }

        const salesRecordsUrl = 'http://localhost:8090/api/salesrecords/'
        const response = await fetch(salesRecordsUrl);
        if (response.ok) {
            const data = await response.json();
            this.setState({ salesrecords: data.sales_records })
        }

    }
    handleChange(event) {
        const value = event.target.value;
        this.setState({ salesperson: value})
    }

    render () {
        return (
            <div className='container'>
                <h1>Sales History</h1>
                <div className="mb-3">
                    <select onChange={this.handleChange} value={this.state.salesperson} name="salesperson" id="saleperson" className="form-select">
                        <option value="">Choose Sales Person</option>
                        {this.state.salespersons.map(salesperson => {
                            return (
                                <option key={salesperson.id} value={salesperson.employee_num}>{salesperson.name}</option>
                            );
                        })}
                    </select>
                </div>

                <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>VIN</th>
                        <th>Sales Person</th>
                        <th>Customer</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.salesrecords.map(a => {
                        return (
                            <tr key={ a.vin.vin }>
                                <td>{ a.vin.vin}</td>
                                <td>{ a.salespersons}</td>
                                <td>{ a.customers}</td>
                                <td>{ a.sales_price}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            </div>
        );
    }
}
export default SalesHistory;
    
