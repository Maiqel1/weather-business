import business from "../assets/img/weatheryBusiness.svg";

function Header() {
  return (
    <div className="header">
      <div className="d-flex justify-content-between">
        <section className="ms-2 ms-md-5 ps-2 ps-md-5 pe-5">
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <img src={business} className="img-fluid" alt="" />
          <h2 className=" text-white">Weathery for <br className="d-none d-md-block"  /> Business</h2>
        </section>
        <section className="me-1 me-md-5">
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <p className="text-white">
            There's no luck in business. There's only drive, <br className="d-none d-md-block" /> determination, and
            more drive.
          </p>
          <p className="text-white "> -Sophie Kinsella</p>
        </section>
      </div>
    </div>
  );
}
export default Header;
