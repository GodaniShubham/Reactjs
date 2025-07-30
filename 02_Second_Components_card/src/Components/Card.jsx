import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="bg-white w-60 rounded m-2 text-black inline-block text-center py-3">
        <img
          src={props.ProfilePhoto}
          alt="ProfilePhoto"
          className="rounded-full w-30 h-30 content-center text-center place-self-center bg-amber-600 mask-center"
        />
        <h3>{props.Name}</h3>
        <h3>
          {props.City} , {props.Age}
        </h3>
        <h3>{props.Profession}</h3>
        <button className="bg-blue-500 px-3 py-1 rounded hover:text-blue-500 hover:bg-gray-800 cursor-pointer">
          Add Friend
        </button>
      </div>
    </>
  );
};

export default Card;
