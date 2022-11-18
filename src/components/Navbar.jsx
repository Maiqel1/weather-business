import logo from '../assets/img/logo.png'

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
        <li className="nav-item">
          <a className=" nav-link" aria-current="page" href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link"  href="#">For Business</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
        News
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link ">Careers</a>
        </li>
        <li className="nav-item">
          <a className="nav-link ">FAQs</a>
        </li>
        <li className="nav-item">
          <a className="nav-link ">About us</a>
        </li>
      </ul>
      <div className="d-flex " >
        <a href="#" className="nav-link me-0 me-md-4">Contact Us</a>
      </div>
      <button className="btn btn-md text-white" type="submit" >Get Started</button>

    </div>
  </div>
</nav>
    </div>
  )
}
export default Navbar