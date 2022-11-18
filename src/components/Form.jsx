function Form() {
  return (
    <div className="form container mt-5 pt-3">
        <div className=" row justify-content-between">
            <div className=" col-md-3">
                <section className="mt-0 mt-md-5 pt-0 pt-md-5">
                    <h4 className="text-center text-md-start">Partner</h4>
                    <h3 className="text-center text-md-start">Get Started</h3>
                    <p className="contactP text-center text-md-start">Contact us to find the right plan for your business</p>
                </section>
            </div>
            <form className=" col-md-8 ps-5">
                  <div className="row justify-content-center">
                    <div className="col-md-6 ">
                        <label htmlFor="">Yourname</label> <br />
                        <input type="text" className="col-10 form-control" />
                    </div>

                    <div className="col-md-6 mt-3 mt-md-0">
                        <label htmlFor="">I work in...</label> <br />
                        <input type="text" className="col-10 form-control" />
                    </div>
                  </div>

                  <div className="row justify-content-center mt-0 mt-md-5">
                    <div className="col-md-6 mt-3 mt-md-0 ">
                        <label htmlFor="">Company Name</label> <br />
                        <input type="text" className="col-10 form-control" />
                    </div>

                    <div className="col-md-6 mt-3 mt-md-0">
                        <label htmlFor="">Company Size</label> <br />
                        <input type="text" className="col-10 form-control" />
                    </div>
                  </div>

                  <div className="row justify-content-center mt-0 mt-md-5">
                    <div className="col-md-6 mt-3 mt-md-0">
                        <label htmlFor="">Company Email</label> <br />
                        <input type="text" className="col-10 form-control" />
                    </div>

                    <div className="col-md-6 mt-3 mt-md-0">
                        <label htmlFor="">Location</label> <br />
                        <input type="text" className="col-10 form-control" />
                    </div>
                  </div>

                <p className="mt-3">Weathery is committed to protecting and respecting your privacy, and we’ll only use your personal information to administer your account and to provide the products and services you requested from us. </p>

                <button className="btn btn-lg">
                    Submit
                </button>
                 
            </form>
        </div>
    </div>
  )
}
export default Form