import React from "react";

import mapimg from "../../../assets/contact us/map.png";

import locationIcon from "../../../assets/contact us/location_on.png";
import phoneIcon from "../../../assets/contact us/phone.png";
import mailIcon from "../../../assets/contact us/mail.png";
import callIcon from "../../../assets/contact us/call.png";

const MapLocation = () => {
  return (
    <section className="pb-12 pt-30 relative">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between md:justify-center gap-10 px-6 md:px-16">
        {/* Map */}
        <div className="w-full md:w-[400px]">
          <img
            src={mapimg}
            alt="Map Location"
            className="w-full h-full object-cover rounded shadow"
          />
        </div>

        {/* Contact Info */}
        <div className="w-full md:w-[400px] flex flex-col justify-center items-center">
          <div className="flex flex-col gap-8 w-fit">
            {/* Address */}
            <div className="flex items-center gap-6">
              <img
                src={locationIcon}
                alt="Location"
                className="w-6 h-6 md:w-8 lg:w-8 md:h-8 lg:h-8"
              />
              <p className="text-[#636A63] text-[20px] max-lg:text-base lg:text-[20px] xl:text-[25px] font-semibold leading-tight">
                No.225, Jaya Mawatha, <br /> Pasayala.
              </p>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-6">
              <img
                src={phoneIcon}
                alt="Phone"
                className="w-6 h-6 md:w-8 lg:w-8 md:h-8 lg:h-8"
              />
              <p className="text-[#636A63] text-[20px] max-lg:text-base lg:text-[20px] xl:text-[25px] font-semibold leading-tight">
                +9471 5134456
              </p>
            </div>

            {/* Email */}
            <div className="flex items-center gap-6">
              <img
                src={mailIcon}
                alt="Email"
                className="w-6 h-6 md:w-8 lg:w-8 md:h-8 lg:h-8"
              />
              <p className="text-[#636A63] text-[20px] max-lg:text-base lg:text-[20px] xl:text-[25px] font-semibold leading-tight">
                Greennest@gmail.com
              </p>
            </div>

            {/* Availability */}
            <div className="flex items-center gap-6">
              <img
                src={callIcon}
                alt="24/7"
                className="w-6 h-6 md:w-8 lg:w-8 md:h-8 lg:h-8"
              />
              <p className="text-[#636A63] text-[20px] max-lg:text-base lg:text-[20px] xl:text-[25px] font-semibold leading-tight">
                We’re Here 24/7
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapLocation;
