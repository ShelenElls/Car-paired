import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to="/manufacturers">Manufacturer List</NavLink>
              </li>
              <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to="/technician">Enter a Technician</NavLink>
              </li>
              <li className="nav-item dropdown">

                  <NavLink className="nav-link" aria-current="page" to="/services">Appointment List</NavLink>
              </li>
              <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to="/services/new/">New Service Appointment</NavLink>
              </li>
              <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to="/services/history/">History of Appointments</NavLink>
              </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;


// example of how to make a dropdown box for the multiple links in a service 
{/* <div className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          All Services
        </div>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <NavLink className="dropdown-item" to="/services">Appointment List</NavLink>
          <NavLink className="dropdown-item" to="/services/new/">New Service Appointment</NavLink>
          <NavLink className="dropdown-item" to="/services/history/">History of Appointments</NavLink>
        </div> */}
// <li className="nav-item dropdown">
{/* <NavLink className="nav-link" aria-current="page" to="/services">Appointment List</NavLink>
// </li>
<li className="nav-item">
    <NavLink className="nav-link" aria-current="page" to="/services/new/">New Service Appointment</NavLink>
</li>
<li className="nav-item">
    <NavLink className="nav-link" aria-current="page" to="/services/history/">History of Appointments</NavLink>
</li> */}
// wouldnt be an a link- it would be a navlink 