import logo from '../assets/img/logo.png'
import search from '../assets/img/search.png'

function Navbar() {
  return (
    <div className="">
        <nav className="navbar navbar-expand-lg container">
  <div className="container-fluid">
    <img src={logo} alt="" className="img-fluid me-3" />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item ms-0 ms-md-0 ms-lg-4">
          <a className=" nav-link" aria-current="page" href="#">About Us</a>
        </li>
        <li className="nav-item me-0 me-md-3 ms-0 ms-md-0 ms-lg-3">
          <a className="nav-link"  href="#">Features</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
        For Business
          </a>
        </li>
      </ul>
      <div className="ms-0 ms-md-0 ps-0 ps-md-0 me-lg-2 pe-lg-1 pt-2 navInput col-lg-5">
          <i className='icon'><img className='img-fluid pb-4' src={search} alt="" /> </i>
          <input type="text" placeholder='Search for city' className='form-control' />
        </div>
      
      <button className="btn btn-md px-3 text-white col-12 col-md-12 col-lg-2" type="submit"  >Sign Up</button>

    </div>
  </div>
</nav>
    </div>
  )
}
export default Navbar