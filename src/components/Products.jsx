function Products() {
  return (
    <div className="products">
      <div className="d-flex flex-wrap flex-md-nowrap p-5 justify-content-center">
        <div className=" justify-content-center">
          <h3 className="text-white text-center">Weathery Time Series</h3>
          <p className="text-white text-center">
            Hour-by-hour forecasts out to 15 days lead time.
          </p>
          <center>
          <button className="btn text-white">Learn More</button>
          </center>
        </div>
        <div>
        <div className="mt-4 mt-md-0 mt-lg-0 ms-4">
          <h3 className="text-white text-center">Weathery TM 14 Day</h3>
          <p className="text-white text-center">
            For Daily and fortnightly decision making
          </p>
          <center>
          <button className="btn text-white">Learn More</button>
          </center>
        </div>
        </div>
        <div>
        <div className="mt-4 mt-md-0 mt-lg-0 ms-4">
          <h3 className="text-white text-center">Weathery 12 Month</h3>
          <p className="text-white text-center">
            Imperative for hedging financial risk
          </p>
          <center>
          <button className="btn text-white">Learn More</button>
          </center>
        </div>
        </div>
        <div>
        <div className="mt-4 mt-md-0 mt-lg-0 ms-4">
          <h3 className="text-white text-center">Weathery Alerts</h3>
          <p className="text-white text-center">
            Plan your operations around what's coming
          </p>
          <center>
          <button className="btn text-white">Learn More</button>
          </center>
        </div>
        </div>
      </div>
    </div>
  );
}
export default Products;
