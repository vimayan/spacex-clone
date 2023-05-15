import React from "react";


function RocketPage({rocket}) {
  console.log(rocket);
  return (
    <>
      <div id="Lazy_background">
        <div></div>{" "}
      </div>
      <div className="container text-white">
        <div className="row row-cols-1 row-cols-lg-2 g-4">
       { rocket.map((vehicle)=><div key={vehicle.id} className="col">   <div className="card">
        <img src={vehicle.flickr_images[0]} className="card-img-top" alt="..." />
        <div className="card-body bg-dark">
          <p className="card-text">
           {vehicle.description}
          </p>
          <button className="btn btn-outline-light know_more">Learn more </button>
        </div>
      </div></div>)}
        </div>
       
      </div>
    </>
  );
}

export default RocketPage;
