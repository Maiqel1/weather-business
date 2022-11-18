import farm from '../assets/img/farm.png'

function Overview() {
  return (
    <div className="overview h-full pb-5">
        <section className="container flex-start">
            <p className="pt-5" > Overview</p>
            <h2 className="col-10 col-md-8">PROTECT YOUR FARM WITH WEATHERY PROTECTOR</h2>
        </section>
        <div className='container pt-4'>
            <img src={farm} className='img-fluid' alt="" />
        </div>
    </div>
  )
}
export default Overview