/* eslint-disable no-unused-vars */
import React from "react";
import GoogleMapReact from "google-map-react";
import { GrDirections } from "react-icons/gr";

const Map = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  const MAP_API_Key = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        marginBottom: "30px",
      }}
      className="relative"
    >
      <div
        className="absolute bg-white z-30 px-3 py-3 my-3 mx-3 grid grid-flow-row grid-cols-3 text-[#5b5b5b] 
      w-max"
      >
        <div className="col-span-2 mt-2">
          <h1 className="font-bold">121 King St</h1>
          <p className="text-sm mt-1">121 King St, Melbourne VIC 3000,</p>
          <span className="text-sm">Australia</span>
        </div>

        <div className="ml-7 mt-2 text-sm hover:underline">
          <a
            href="https://maps.google.com/maps/dir//121+King+St+Melbourne+VIC+3000+Australia/@-37.817251,144.955775,14z/data=!4m5!4m4!1m0!1m2!1m1!1s0x6ad65d4dd5a05d97:0x3e64f855a564844d"
            target="_blank"
          >
            <span>
              <GrDirections className="text-2xl ml-3" />
            </span>
            Direction
          </a>
        </div>

        <div className="mt-3 text-sm hover:underline">
          <a
            href="https://maps.google.com/maps?ll=-37.817251,144.955775&amp;z=14&amp;t=m&amp;hl=en-US&amp;gl=US&amp;mapclient=embed&amp;q=121%20King%20St%20Melbourne%20VIC%203000%20Australia"
            target="_blank"
          >
            View larger Map
          </a>
        </div>
      </div>
      <GoogleMapReact
        bootstrapURLKeys={{ key: MAP_API_Key }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
