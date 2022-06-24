import React from 'react';

class VehicleModelForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            picture_url: '',
            manufacturer_id: '',
            manufacturer_ids: [],
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangePictureUrl = this.handleChangePictureUrl.bind(this);   
        this.handleChangeManufacturer = this.handleChangeManufacturer.bind(this);
    }

    async componentDidMount() {
        const url = 'http://localhost:8100/api/manufacturers/'
        const response = await fetch(url)
        if (response.ok) {
            const data = await response.json()
            this.setState({ manufacturer_ids: data.manufacturers })
        }
    }
    handleChangeName(event) {
        const value = event.target.value
        this.setState({ name: value })
    }
    handleChangePictureUrl(event) {
        const value = event.target.value
        console.log(event.target.value)
        this.setState({ picture_url: value })
    }
    handleChangeManufacturer(event) {
        const value = event.target.value
        this.setState({ manufacturer_id: value })
    }

    async handleSubmit(event) {
        event.preventDefault()
        const data = {...this.state}
        delete data.manufacturer_ids
        console.log(data)
        const modelUrl = 'http://localhost:8100/api/models/new/'
        const fetchConfig = {
            method: 'post',
            body: JSON.stringify(data),
            headers: { 'content-type': 'application/json' }
        }
        const response = await fetch(modelUrl, fetchConfig)
        if (response.ok) {
            const newModel = await response.json()
            console.log(newModel)
            this.setState({
                name: '',
                picture_url: '',
                manufacturer_id: '',
            })
        }
    }

    render() {
        return (
            <div className="px-4 py-5 my-5 text-center">
                <h1 className="display-5 fw-bold">Create a Vehicle Model</h1>
                <form onSubmit={this.handleSubmit} id='create-vehiclemodel-form'>
                    <div className="form-floating mb-3">
                        <input onChange={this.handleChangeName} name='name' requiredtype='text' id='name' className='form-control' />
                        <label htmlFor='name'>Name</label>
                    </div>
                    <div className="form-floating mb-3">
                    <input onChange={this.handleChangePictureUrl} value={this.state.picture} name='picture_url' type='text' id='picture_url' className='form-control' />
                        <label htmlFor='picture_url'>Picture</label>
                    </div>
                    <div className="mb-3">
                        <select onChange={this.handleChangeManufacturer} name='manufacturer' className="form-select" id="manufacturer" multiple={false}>
                            <option value="">Manufacturer</option>
                            {this.state.manufacturer_ids.map(manufacturer => {
                                return (
                                    <option key={manufacturer.id} value={manufacturer.id}>{manufacturer.name}</option>
                                )
                            })}
                        </select>
                    </div>
                    <button className="btn btn-primary">Add Vehicle Model</button>
                </form>
            </div>            
        )
    }
}

export default VehicleModelForm;