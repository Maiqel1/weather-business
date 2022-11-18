import cardImg1 from "../assets/img/cardimg1.png";
import cardImg2 from "../assets/img/cardimg2.png";
import cardImg3 from "../assets/img/cardimg3.png";

function Cards() {
  return (
    <div className="container-fluid mb-5 mt-5">
      <div className="d-flex justify-content-center flex-wrap flex-md-nowrap">
        <div className="customCard  h-full p-4">
          <div className="text-center">
            <img src={cardImg1} className="text-center mt-3" alt="" />
            <h3 className="mt-4">Accurate forecasts assist your planning</h3>
            <p className="mt-4">
              Accurate long term forecasts allow financial planning around broad
              scale weather risks and crop planning.
            </p>
          </div>
        </div>
        <div className="customCard  mx-auto ms-0 ms-md-4 ms-lg-4 me-0 me-md-4 me-lg-4 mt-3 mt-md-0 mt-md-0 mb-3 mb-md-0 mb-lg-0 h-full p-4">
          <div className="text-center">
            <img src={cardImg2} className="text-center mt-3" alt="" />
            <h3 className="mt-4">
              Critical decisions can be planned precisely
            </h3>
            <p className="mt-4">
              Short term forecasts focusing on major weather events can allow a
              farmer to more precisely plan critical decisions
            </p>
          </div>
        </div>
        <div className="customCard h-full  p-4">
          <div className="text-center">
            <img src={cardImg3} className="text-center mt-3" alt="" />
            <h3 className="mt-4">Better crop or herd management</h3>
            <p className="mt-4 mt-md-5 mt-lg-4">
              Dedicated tools and diagnostics can assist the farmer in better
              crop or herd management.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cards;
