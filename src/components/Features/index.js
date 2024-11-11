import React from "react";
import "./Features.css";
// import calendario from "../../assets/calendario.svg";
// import ducha from "../../assets/ducha.svg";
import ducha from "../../images/playerfacilities.png";
import pesa from "../../images/equipement1.png";
// import salud from "../../assets/salud.svg";
import { FaHeartbeat, FaTools, FaTicketAlt } from "react-icons/fa";

const Features = () => {
  return (
    // <section id="features" className="container m-3 center">
    //   <h2 className="m-3">Our Features</h2>

    // </section>
    <>
      <section class="pt-10 pb-8 overflow-hidden bg-gray-100 sm:pt-16 lg:pt-24">
        <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Our Features
            </h2>
            <p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis.
            </p>
            </div>
            <div className="features">
              <div className="feature">
                {/* <img className="feature__img" src={calendario} alt="FitClub events" /> */}
                <h2><FaTicketAlt className="cool-events-icon w-24 h-24" /></h2>
                <h4>COOL EVENTS</h4>
              </div>
              <div className="feature">
                {/* <img
            className="feature__img"
            src={salud}
            alt="Medical Attention FitClub"
          /> */}
          <h2><FaTicketAlt className="cool-events-icon w-24 h-24" /></h2>
                <h4>MEDICAL ATTENTION</h4>
              </div>
              <div className="feature">
              <h2><FaTicketAlt className="cool-events-icon w-24 h-24" /></h2>
                {/* <img
                  className="feature__img"
                  src={pesa}
                  alt="FitClub Equipment"
                /> */}
                <h4>EQUIPEMENT</h4>
              </div>
              <div className="feature">
                {/* <img
                  className="feature__img"
                  src={ducha}
                  alt="FitClub Showers"
                /> */}
                <h2><FaTicketAlt className="cool-events-icon w-24 h-24" /></h2>
                <h4>PLAYER FACILITIES</h4>
              </div>
            </div>

            {/* <a
                href="/login"
                title=""
                class="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-gray-900 transition-all duration-200 border-2 border-gray-200 rounded-md mt-9 hover:bg-gray-900 hover:text-white hover:border-gray-900 focus:bg-gray-900 focus:text-white focus:border-gray-900"
                role="button"
            >
                Check all apps
            </a>
        

    <img class="w-full min-w-full mx-auto mt-12 scale-150 max-w-7xl lg:min-w-0 lg:mt-0 lg:scale-100" src="https://cdn.rareblocks.xyz/collection/celebration/images/integration/1/services-icons.png" alt="" /> */}
          
        </div>
      </section>{" "}
    </>
  );
};

export default Features;
