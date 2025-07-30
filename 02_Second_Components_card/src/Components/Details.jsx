import React from "react";

const Details = (props) => {
  return (
    <>
      <div className="flex bg-blue-700 w-full h-full rounded p-4 gap-3 my-5">
        <div>
          <img src={props.src} alt="Profile" className="w-12 h-12 rounded-full bg-amber-100"/>
        </div>
        <div className="items-center gap-3">
          <h3>{props.name}</h3>
          <span className="flex gap-3">
            <h3>{props.gender}</h3> |
            <h3>Other : {props.occ}</h3>
          </span>
        </div>
      </div>
    </>
  );
};

export default Details;
