function Products() {
  return (
    <div className="products">
      <h2 className='text-center text-white mt-5'>WeatheryBusiness <span style={{color : "#F05513" }}>Products</span></h2>
      <div className="row">
        <div className="p-5 col-12 col-md-3 d-flex justify-content-center mx-auto">
          <section className="justify-content-center text-center">
            <h3 className="text-white">Weather time Series</h3>
            <p className="">
              Hour-by-hour forecasts out to 15 days lead time.
            </p>
            <center>
            <button className="btn btn-lg text-white">Learn More</button>
            </center>
          </section>
        </div>
        <div className="p-5 col-12 col-md-3 d-flex justify-content-center">
          <section className="justify-content-center text-center">
          <h3 className="text-white">Weathery TM 14 Day</h3>
            <p className="">
            For daily and fortnightly decision making.
            </p>
            <center>
            <button className="btn btn-lg text-white">Learn More</button>
            </center>
          </section>
        </div>
        <div className="p-5 col-12 col-md-3 d-flex justify-content-center">
          <section className="justify-content-center text-center">
          <h3 className="text-white">Weathery 12 Months</h3>
            <p className="">
            Imperative for hedging <br className="d-none d-md-block" /> financial risk.
            </p>
            <center>
            <button className="btn btn-lg text-white">Learn More</button>
            </center>
          </section>
        </div>
        <div className="p-5 col-12 col-md-3 d-flex justify-content-center">
          <section className="justify-content-center text-center">
          <h3 className="text-white">Weathery Alerts</h3>
            <p className="">
            Plan your operations around what's coming.
            </p>
            <center>
            <button className="btn btn-lg text-white">Learn More</button>
            </center>
          </section>
        </div>
      </div>
    </div>
  );
}
export default Products;
