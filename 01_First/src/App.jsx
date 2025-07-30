import React, { useState } from "react";

const App = () => {
  const [user, setUser] = useState("");
  const [newuser , setNewuser] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(user);
    setNewuser(user);
  };

  return (
    <>
      <h1 className="text-3xl place-self-center ">This is Form</h1>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex justify-center gap-0.5"
      >
        <input
          type="text"
          placeholder="Enter Something Bro"
          className="border rounded px-2"
          onChange={(e) => {setUser(e.target.value)}}
          value={user}
        />
        <br></br>
        <button className="bg-green-500 px-4 py-2 rounded text-white hover:text-gray-700 hover:bg-green-400">
          Submit
        </button>
      </form>

      <p className="text-2xl">{newuser}</p>
    </>
  );
};

export default App;
