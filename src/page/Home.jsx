import React, { Suspense } from "react";

const HomePage = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(import("../lazyload/HomePage"));
    }, 2000);
  });
});

function Home() {

  const homeText = [
    ["UPCOMING LAUNCH", "STARLINK MISSION","https://www.spacex.com/launches/mission/?missionId=sl5-9"],
    ["COMMERCIAL", "SPACE STATION","https://www.spacex.com/updates/"],
    ["RECENT", "STARSHIP FLIGHT TEST","https://www.spacex.com/launches/mission/?missionId=starship-flight-test"],
  ];
  return (
    <>
      <div className="container-fluid text-white h-100" id="home">
        {homeText.map((text,index) => (
          <div key={index} className="row h-100 align-items-center">
            <div className="col-6 col-md-7 ms-auto  d-flex flex-column ">
              <p>{text[0]}</p>
              <h3>{text[1]}</h3>
              <div>
                <button onClick={()=>window.open(text[2])} className="btn btn-outline-light know_more">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Suspense fallback={<></>}>
        <HomePage />
      </Suspense>
    </>
  );
}

export default Home;
