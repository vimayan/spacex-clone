import React from 'react';

function LaunchPage({launch}) {
    return ( <>
     <div id="Lazy_background">
        <div></div>{" "}
      </div>
      <div className="container text-white">
        <div className="row row-cols-1 row-cols-lg-2 g-4">
       { launch.map((vehicle)=><div key={vehicle.id} className="col">   <div className="card">
        <img src={vehicle.links.patch.large} loading='lazy' className="card-img-top" alt="..." />
        <div className="card-body bg-dark">
          <span className="card-title">  <span className='fs-4' >{vehicle.name}</span> - {new Date(vehicle.date_local).toLocaleDateString()}</span>
       
          <p className={`card-text text-${vehicle.success?'success':'danger'}`}>
           {vehicle.details}
          </p>
          <a href={vehicle.links.article} className={`btn btn-outline-${vehicle.success?'success':'danger'} know_more`}>Learn more </a>
        </div>
      </div></div>)}
        </div>
       
      </div>
    </> );
}

export default LaunchPage;