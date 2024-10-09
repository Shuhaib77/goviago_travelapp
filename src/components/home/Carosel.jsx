import React from "react";
import { Carousel } from "@material-tailwind/react";

function Carosel() {
  return (
    <div>
      <Carousel>
        <img
          src="https://www.keralatourism.org/images/banner/desktop/escape-to-the-hills-1920x650_(2).jpg"
          alt=""
          className=""
        />
        <img
          src="https://www.keralatourism.org/images/banner/desktop/destination-wedding-banner-1920.jpg"
          alt=""
        />
        <img
          src="https://www.keralatourism.org/images/banner/desktop/banner_malarickal_1920.jpg"
          alt=""
        />
      </Carousel>
    </div>
  );
}

export default Carosel;
