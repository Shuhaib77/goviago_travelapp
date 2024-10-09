import React, { useState, useEffect } from "react";

function Navbar() {
  const [navbarBg, setNavbarBg] = useState(false);

  // Function to handle scroll event
  const handleScroll = () => {
    if (window.scrollY >= 80) {
      setNavbarBg(true); // Change background when scrolled past 80px
    } else {
      setNavbarBg(false); // Keep it transparent when at the top
    }
  };

  // useEffect to add the scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Clean up listener on component unmount
    };
  }, []);

  return (
    <div
      className={`fixed top-0 w-full flex justify-around items-center z-50 transition-all duration-300 ${
        navbarBg ? "bg-blue-900 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="flex text-black">
        <img
          src="https://www.keralatourism.org/images/kt/kerala-tourism-title.png?d=18122017"
          alt="Kerala Tourism"
          className="w-[25vh] mb-3"
        />
      </div>
      <div>
        <div className="mt-7 flex justify-evenly text-black p-5 space-x-4">
          <p className="m-2">EXPERIENCE KERALA</p>
          <p className="m-2">WHERE TO GO</p>
          <p className="m-2">WHERE TO STAY</p>
          <p className="m-2">WHAT TO DO</p>
          <p className="m-2">PLAN YOUR TRIP</p>
          <p className="m-2">TRAVELCARE</p>
          <p className="m-2">E-BROCHURES</p>
          <p className="m-2">E-NEWSLETTER</p>
        </div>
        
      </div>
      
    </div>
  );
}

export default Navbar;
