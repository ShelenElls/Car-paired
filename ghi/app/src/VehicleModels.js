// url http://localhost:8100/api/models/
// fields - name, picture_url, and manufacturer =[] manufacturer.name
// get request is {"autos": autos}
// post request is just auto 

function VehicleModel(props) {
    console.log("propmodel", props)
    return (
        <>
            <div className="container-fluid">
                    <h1>Vehicle Models</h1>
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>Model Name</th>
                                <th>Manufacturer</th>
                                <th className="d-flex justify-contend-md-center">Picture</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.autos.map(model => {
                                return (
                                    <tr key={model.href}>
                                        <td>{model.name}</td>
                                        <td>{model.manufacturer.name}</td>
                                        <td className="d-flex justify-contend-md-center"><img src={model.picture_url} alt="" width="75" height="250" className="img-fluid img-thumbnail" /></td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
            </div>
        </>
    )
}
export default VehicleModel;