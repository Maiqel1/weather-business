import logo from '../assets/img/footerLogo.svg'
import apple from '../assets/img/apple.svg'
import playstore from '../assets/img/playstore.svg'
import CustomerCare from '../assets/img/CustomerCare.svg'
import uk from '../assets/img/uk.svg'
import language from '../assets/img/language.svg'

function Footer() {
  return (
    <footer className='footer mt-5 pb-5'>
    <div className=" d-flex flex-wrap justify-content-between p-5">
        <div className=''>
        <img src={logo} alt="" />
        <section className='d-block d-md-flex'>
            <p className="text-white ms-3">About Us</p>
            <p className="text-white ms-3">Careers</p>
            <p className="text-white ms-3">Weathery Business</p>
            <p className="text-white ms-3">Contact us</p>
            <p className="text-white ms-3">Privacy Policy</p>
            <p className="text-white ms-3">Terms and Conditions</p>
        </section>
        </div>

        <div className='mt-4 mt-md-0' >
            <h2 className='text-white'>Download the mobile app</h2>
            <div className='d-flex mt-3'>
            <img className='img-fluid' src={playstore} alt="" />
            <img className='img-fluid ms-4' src={apple} alt="" />
            </div>
        </div>
        
    </div>
    <hr className='line' />
        <div className='d-block d-md-flex justify-content-between  '>
            <div className='text-white'>
                <p className='ms-4 ms-md-5'>&copy; 2022 Weathery, all rights reserved to Team Gear</p>
            </div>

            <div className='d-flex me-0 me-md-5 ms-4 ms-md-0'>
            <i><img src={language} alt="" /></i> <p className='text-white d-none d-md-block' > English</p>
            <i className='ms-4'><img src={uk} alt="" /></i> <p className='text-white d-none d-md-block'>United Kingdom</p>
            <i className='ms-4'><img src={CustomerCare} alt="" /></i>   <p className='text-white d-none d-md-block '>Customer Support</p>


            </div>
        </div>
    </footer>
  )
}
export default Footer