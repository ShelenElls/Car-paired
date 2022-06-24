// form for the vin, color, year, model,
// color = char, year = int, vin = char, sold = boolean, model = foreignkey 
// model = name
import React from 'react';

class FormAutos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            vin: '',
            color: '',
            year: '',
            model_id: '',
            model_ids: [],
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeVin = this.handleChangeVin.bind(this);
        this.handleChangeColor = this.handleChangeColor.bind(this);
        this.handleChangeYear = this.handleChangeYear.bind(this);
        this.handleChangeModel = this.handleChangeModel.bind(this);
    }

    async componentDidMount() {
        const url = 'http://localhost:8100/api/models/'
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            this.setState({ model_ids: data.models })
        }
    }

    // handleChange functions // 
    handleChangeVin(event) {
        const value = event.target.value
        this.setState({ vin: value })
    }
    handleChangeColor(event) {
        const value = event.target.value
        this.setState({ color: value })
    }
    handleChangeYear(event) {
        const value = event.target.value
        this.setState({ year: value })
    }
    handleChangeModel(event) {
        const value = event.target.value
        this.setState({ model_id: value })
    }

    // Handle Submit //
    async handleSubmit(event) {
        event.preventDefault()
        const data = {...this.state};
        delete data.model_ids
        
        const url = 'http://localhost:8100/api/automobiles/'
        const fetchConfig = {
            method: 'post',
            body: JSON.stringify(data),
            headers : {
                'Content-Type': 'application/json',
            },
        };
        console.log(data)

        const response = await fetch(url, fetchConfig);
        if (response.ok) {
            this.setState({
                vin: '',
                color: '',
                year: '',
                model_id: '',
            })
        }
    }

    render() {
        return (
            <div className="px-4 py-5 my-5 text-center">
            <h1 className="display-5 fw-bold">Create an Automobile</h1>
            <form onSubmit={this.handleSubmit} id='create-automobile-form'>
                <div className="form-floating mb-3">
                    <input onChange={this.handleChangeVin} name='vin' requiredtype='text' id='vin' className='form-control' />
                    <label htmlFor='vin'>VIN</label>
                </div>
                <div className="form-floating mb-3">
                <input onChange={this.handleChangeColor}  name='color' type='text' id='color' className='form-control' />
                    <label htmlFor='color'>Color</label>
                </div>
                <div className="form-floating mb-3">
                <input onChange={this.handleChangeYear}  name='year' type='number' id='year' className='form-control' />
                    <label htmlFor='year'>Year</label>
                </div>
                <div className="mb-3">
                    <select onChange={this.handleChangeModel} name='model' className="form-select" id="model" >
                        <option value="">Model</option>
                        {this.state.model_ids.map(model => {
                            return (
                                <option key={model.id} value={model.id}>{model.name}</option>
                            )
                        })}
                    </select>
                </div>
                <button className="btn btn-primary">Add Automobile</button>
            </form>
        </div>            
        )
    }
}
export default FormAutos;
