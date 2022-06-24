import React from 'react';

function SalesRecordList(props) {
    return (
        <div className="container-fluid">
            <h2>List Sales Records</h2>
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
                    {props.sales_record.map(a => {
                        return (
                            <tr key={ a.vin.vin }>
                                <td>{ a.vin.vin}</td>
                                <td>{ a.sales_person.name}</td>
                                <td>{ a.customer.name}</td>
                                <td>{ a.sales_price}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};
export default SalesRecordList;