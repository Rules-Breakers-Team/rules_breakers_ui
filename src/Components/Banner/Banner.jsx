import './Banner.css'

export default function Banner () {

    return(
<>
<div className="banner">
  <div className="banner-text">
    <h1>N - HOTEL</h1>
    <h3>Le plaisir dans le Luxe</h3>
    <div className="mt-40">
        <a href="#offres" className="btn btn-lg btn-color btn-icon">
        <span>Nos Offres</span>
        <i className="fa fa-angle-right"></i>             
        </a>
    </div>
  </div>
</div>
</>
    )
}