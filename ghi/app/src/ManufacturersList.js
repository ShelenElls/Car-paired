// just the name of manufacturers ; name on views 
// manufacturers

function ManufacturersList(props) {
    return (
        <>
          <div className="container">
            <h1>Manufacturers</h1>
          </div>
          <table className="table table-striped">
          <thead>
            <th>
                Name
            </th>
          </thead>
            <tbody>
                {props.manufacturers.map(manufacturer => {
                    return(
                        <tr key={manufacturer.id}>
                            <td>{manufacturer.name}</td>
                        </tr>
                    )
                })}
            </tbody>
          </table>  
        </>
    )
}
export default ManufacturersList