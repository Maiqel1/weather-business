import Arrow from '../assets/img/ArrowUp.png'

function industries() {
  return (
    <div className="industries mt-5 pb-5">
      <div className="container">
        <h3 className="pt-5 mb-4">Industries</h3>
        <h2 className="text-white mb-5">
          Our Services Are Tailored For Your Business
        </h2>
      </div>

      <div className="row d-flex justify-content-center">
        <div className="industryCard col-md-3 col-8">
          <h4 className="text-white mt-4 mb-4">Manufacturing</h4>
          <p className="text-white">
            Our experts work with you to help strengthen your business locations
            against weather threats 24/7 with safety plans and procedures
            tailored to your specific business needs.
          </p>
          <a className="d-flex justify-content-end" href="#">
            <img src={Arrow} alt="" />
          </a>
        </div>

        <div className="industryCard col-md-3 col-8 ms-5 me-5 mt-3 mt-md-0 mb-3 mb-md-0">
        <h4 className="text-white mt-4 mb-4">Retail</h4>
          <p className="text-white">
          Position your inventory with
 the forecast.
          </p><br /><br /><br />
          <a className="d-flex justify-content-end mt-1" href="#">
            <img src={Arrow} alt="" />
          </a>   
        </div>

        <div className="industryCard col-md-3 col-8">
        <h4 className="text-white mt-4 mb-4">Financial Services</h4>
          <p className="text-white">
          Keep transactions and trades 
on schedule at branches, data
and call centers.
          </p><br /> <br />
          <a className="d-flex justify-content-end mt-2" href="#">
            <img src={Arrow} alt="" />
          </a>
        </div>
      </div>

      <div className="row d-flex justify-content-center mt-3 mb-3" >
        <div className="industryCard col-md-3 col-8 pb-4">
        <h4 className="text-white mt-4 mb-4">Energy</h4>
          <p className="text-white">
          Optimize asset deployment 
and allocations ahead of the 
storm.
          </p><br /><br />
          <a className="d-flex justify-content-end " href="#">
            <img src={Arrow} alt="" />
          </a> 
        </div>
        <div className="industryCard col-md-3 col-8 ms-5 me-5 mt-3 mb-3 mt-md-0 mb-md-0">
        <h4 className="text-white mt-4 mb-4">Insurance</h4>
          <p className="text-white">
          Proactive weather-related 
insightsfor your workforce.
          </p> 
          <a className="d-flex justify-content-end mt-5 pt-3" href="#">
            <img src={Arrow} alt="" />
          </a>
        </div>
        <div className="industryCard col-md-3 col-8">
        <h4 className="text-white mt-4 mb-4">Health Care</h4>
          <p className="text-white">
          Protect your patients,
 staff and equipment.
          </p>
          <a className="d-flex justify-content-end mt-5 pt-3" href="#">
            <img src={Arrow} alt="" />
          </a>
        </div>
      </div>

      <div className="row d-flex justify-content-center">
        <div className="industryCard col-md-3 col-8">
        <h4 className="text-white mt-4 mb-4">Import & Export</h4>
          <p className="text-white">
          Predict and plan for weather
-related routing and supply 
chain disruptions.
          </p>
          <a className="d-flex justify-content-end mt-4" href="#">
            <img src={Arrow} alt="" />
          </a>
        </div>

        <div className="industryCard col-md-3 col-8 ms-5 me-5 mt-3 mb-3 mt-md-0 mb-md-0">
        <h4 className="text-white mt-4 mb-4 ">Forensic Meteorology</h4>
          <p className="text-white">
          Get expert witness testimony and
 past weather event verification.
          </p>
          <a className="d-flex justify-content-end mt-5" href="#">
            <img src={Arrow} alt="" />
          </a>
        </div>
        <div className="industryCard col-md-3 col-8">
        <h4 className="text-white mt-4 mb-4">Mining</h4>
          <p className="text-white">
          Designed to take the guesswork
 out of weather.
          </p>
          <a className="d-flex justify-content-end mt-5" href="#">
            <img src={Arrow} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}
export default industries;
