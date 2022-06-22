// just the name of manufacturers ; name on views 
// manufacturers

function ManufacturersList(props) {
  console.log("props side", props)
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
                {props.manufacturers.map(man => {
                    return(
                        <tr key={man.id}>
                            <td>{man.name}</td>
                        </tr>
                    )
                })}
            </tbody>
          </table>  
        </>
    )
}
export default ManufacturersList