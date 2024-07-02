import React from "react";
import "./Homepage.css";

function HomePage() {
  const spaceX = [
    //"https://sxcontent9668.azureedge.us/cms-assets/assets/Homepage_Starlink_SLC_40_Desktop_cac54ee8bd.jpg",
    "https://www.spacex.com/static/images/dragon/refresh/DRAGON_DM2_LC39A_3840x2560.jpg",
    "https://sxcontent9668.azureedge.us/cms-assets/assets/Haven1_Hero_5_2600x1400_a23f540f5f.jpg",
    "https://sxcontent9668.azureedge.us/cms-assets/assets/STARSHIP_Testflight_DESKTOP_2b3bea613a.jpg",
  ];
  return (
    <>
      <div id="background">
        <div></div>{" "}
      </div>
      <div id="img-container" className="d-none d-lg-block ">
        {spaceX.map((img, index) => (
          <img key={index} src={img} alt="" />
        ))}
      </div>
    </>
  );
}

export default HomePage;
