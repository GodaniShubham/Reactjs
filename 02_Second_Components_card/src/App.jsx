import { useEffect, useState } from "react";
import "./App.css";
import Card from "./Components/Card.jsx";
import Navbar from "./Components/Navbar.jsx";
import Details from "./Components/Details.jsx";
import axios from "axios";

function App() {
  const data = [
    {
      profilePhoto:
        "https://images.squarespace-cdn.com/content/v1/574512d92eeb81676262d877/1dc1f125-b7d6-4302-8d3b-b25c3dc2a546/Headshot-Photographer-London-UK-Ian-Kobylanki-292.jpg",
      name: "John Doe",
      city: "New York",
      age: 30,
      profession: "Software Engineer",
    },
    {
      profilePhoto:
        "https://heroshotphotography.com/wp-content/uploads/2023/03/male-linkedin-corporate-headshot-on-white-square-1024x1024.jpg",
      name: "Jane Smith",
      city: "Los Angeles",
      age: 28,
      profession: "Graphic Designer",
    },
    {
      profilePhoto:
        "https://jcpportraits.com/wp-content/uploads/2025/04/Gallery-image-5-1080x1080-1.jpg",
      name: "Michael Brown",
      city: "Chicago",
      age: 35,
      profession: "Marketing Manager",
    },
    {
      profilePhoto:
        "https://shotkit.com/wp-content/uploads/2023/08/posing-emmy-e.jpeg",
      name: "Emily Davis",
      city: "Houston",
      age: 26,
      profession: "Data Analyst",
    },
    {
      profilePhoto:
        "https://imgs.search.brave.com/_8pYozKXQAw_Tfd6Wnyvn9247I-PdPdH91h6x5HSDPE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAyNC8w/NS8xNS8yMC81OC9k/ZXZlbG9wZXItODc2/NDUyOF82NDAuanBn",
      name: "David Shubh",
      city: "San Francisco",
      age: 32,
      profession: "Product Manager",
    },
    {
      profilePhoto:
        "https://imgs.search.brave.com/i5VkIzWd4NBGsv796kj7181Q5vt8XvmAVRWac6voRL0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAxLzkzLzg0LzI1/LzM2MF9GXzE5Mzg0/MjU4OF9PZTdxWjdI/ZWpvSXp5WFp3YUlp/UUJZNnNqdVU5Nm5Q/Sy5qcGc",
      name: "Willson John",
      city: "New Jearsy",
      age: 35,
      profession: "Backend Developer",
    },
  ];

  const [detail, setDetail] = useState([]);

  const getData = async() => {
    const response = await axios.get('https://bobsburgers-api.herokuapp.com/characters/?limit=12&skip=352');
   
    setDetail(response.data);
  };

  useEffect(() => {
    getData()
  }, [])
  

  return (
    <>
      <Navbar />
      <div className="p-10 text-center">
        {data.map((element, idx) => {
          return (
            <Card
              key={idx}
              ProfilePhoto={element.profilePhoto}
              Name={element.name}
              City={element.city}
              Age={element.age}
              Profession={element.profession}
            />
          );
        })}
      </div>
      <div className="px-20 bg-gray-800 w-7x h-full mx-20 py-10 rounded">
        {detail.map((elem, idx) => {
          return <Details key={idx} name = {elem.name} src = {elem.image} gender = {elem.gender} occ = {elem.allOccupations}/>;
        })}
      </div>
    </>
  );
}

export default App;
