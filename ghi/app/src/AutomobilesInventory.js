

import React from 'react';

function ListAutomobiles(props) {
    return (
        <div className="container-fluid">
            <h2>List Automobiles</h2>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>VIN</th>
                        <th>Color</th>
                        <th>Year</th>
                        <th>Model</th>
                        <th>Manufacturer</th>
                    </tr>
                </thead>
                <tbody>
                    {props.auto.map(a => {
                        return (
                            <tr key={a.id}>
                                <td>{ a.vin }</td>
                                <td>{ a.color }</td>
                                <td>{ a.year }</td>
                                <td>{ a.model.name }</td>
                                <td>{ a.model.manufacturer.name }</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default ListAutomobiles;
