//form field for the name of manufacturers

// http://localhost:8100/api/manufacturers/

import React from 'react';

class ManufacturerForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            hasCreated: false,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
    }
    async handleSubmit(event) {
        event.preventDefault();
        const data = { ...this.state };
        delete data.hasCreated;

        const url = 'http://localhost:8100/api/manufacturers/new/'
        const fetchConfig = {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const manformResponse = await fetch(url, fetchConfig);
        if (manformResponse.ok) {
            this.setState({
                name: '',
                hasCreated: true,
            })
        }
    }
    handleChangeName(event) {
        const value = event.target.value;
        this.setState({ name: value });
    }

    render() {
        let messageClasses = 'alert alert-success d-none mb-0';
        let formClasses = '';
        if (this.state.hasCreated) {
            messageClasses = 'alert alert-success mb-0';
            formClasses = 'd-none';
        }

        return (
            <>
                <div className='row'>
                    <div className='col col-sm-auto'>
                        <form className='{formClasses}' onSubmit={this.handleSubmit} id="create-manufacturer-form">
                            <h1 className='card-title'>Enter New Manufacturer</h1>
                            <div className="col">
                                <div className="form-floating mb-3">
                                    <input onChange={this.handleChangeName} required placeholder="Name" type="text" id="name" name="name" className="form-control" />
                                    <label htmlFor="">Manufacturer Name</label>
                                </div>
                            </div>
                            <button className="btn btn-lg btn-primary">Add</button>
                        </form>
                        <div className={messageClasses} id="success-message">
                            Manufacturer Added
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default ManufacturerForm;

// function ManufacturersList(props)
//   console.log("props side", props)
//   return (
//       <>
//         <div className="container">
//           <h1>Manufacturers</h1>
//         </div>
//         <table className="table table-striped">
//         <thead>
//           <th>
//               Name
//           </th>
//         </thead>
//           <tbody>
//               {props.manufacturers.map(man => {
//                   return(
//                       <tr key={man.id}>
//                           <td>{man.name}</td>
//                       </tr>
//                   )
//               })}
//           </tbody>
//         </table>
//       </>
//   )
// }
// export default ManufacturersList