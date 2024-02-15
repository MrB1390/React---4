import React, { useState } from "react";
import Navbar from "./component/Navbar";
import Poster from "./component/Poster";
import Bodyvalue from "./component/Bodyvalue";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import All from "./component/All";
import Fullstack from "./component/Fullstack";
import Frontend from "./component/Frontend";
import Backend from "./component/Backend";
import Devops from "./component/Devops";

const data = [{
  id: 1,
  head: "Full Stack Development",
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-8G7uuaQwbOmZfO8S6dwcSi9ZjpRcNoTB-Gm6ugpb9knEtBUV",
  description: "Developers eager to get skilled in React and Node. js "
},
{
  id: 2,
  head: "Full Stack Development",
  img: "https://img.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg?size=626&ext=jpg&ga=GA1.1.1908716185.1705579082&semt=ais",
  description: "Developers eager to get skilled in React and Node. js with datbases and data structures "
},
{
  id: 3,
  head: "Front End Development",
  img: "https://img.freepik.com/free-vector/hand-drawn-flat-design-devops-illustration_23-2149387396.jpg?size=626&ext=jpg&ga=GA1.1.1908716185.1705579082&semt=ais",
  description: "Developers eager to get skilled in React and Angular.js"
},
{
  id: 4,
  head: "Front End Development",
  img: "https://img.freepik.com/free-vector/hand-drawn-flat-design-devops-illustration_23-2149387396.jpg?size=626&ext=jpg&ga=GA1.1.1908716185.1705579082&semt=ais",
  description: "Developers eager to get skilled in React and Vue. js "
},
{
  id: 5,
  head: "Back End Development",
  img: "https://image.shutterstock.com/image-vector/programming-banner-coding-best-languages-260nw-1078387013.jpg",
  description: "Developers eager to get skilled in Python and Node. js "
},
{
  id: 6,
  head: "Back End Development",
  img: "https://img.freepik.com/free-photo/programming-script-text-coding-word_53876-64939.jpg?size=626&ext=jpg&ga=GA1.1.1908716185.1705579082&semt=ais",
  description: "Developers eager to get in Python and Javascript"
},
{
  id: 7,
  head: "Devops",
  img: "https://image.shutterstock.com/image-photo/shot-female-programmer-working-monitoring-260nw-2324952227.jpg",
  description: "Concepts of AWS"
},
]
const App = () => {
 const [course,setCourse] = useState(data);
  return (
    <div>
      <div className="container">
        <div>
          <Navbar />
          <Poster />
        </div>
        <BrowserRouter>
          <Bodyvalue />
          <Routes>
            <Route path="/" element={<All course={course} setCourse={setCourse} />} />
            <Route path="/fullstack" element={<Fullstack course={course} setCourse={setCourse} />} />
            <Route path="/frontend" element={<Frontend course={course} setCourse={setCourse} />} />
            <Route path="/backend" element={<Backend course={course} setCourse={setCourse} />} />
            <Route path="/devops" element={<Devops course={course} setCourse={setCourse} />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
