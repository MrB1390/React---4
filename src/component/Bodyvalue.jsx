import React from "react";
import "./css/style.css";
import { Link } from "react-router-dom";
import Card from "./Card";

const Bodyvalue = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <div
            class="collapse navbar-collapse d-flex justify-content-center"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav textvalue">
              <li class="nav-item p-2 mx-3">
                <Link to="/">All</Link>
              </li>
              <li class="nav-item p-2 mx-3">
                <Link to="/fullstack">Full-Stack Development</Link>
              </li>

              <li class="nav-item p-2 mx-3">
                <Link to="/frontend">Front-End Development</Link>
              </li>

              <li class="nav-item p-2 mx-3">
                <Link to="/backend">Back-end Development</Link>
              </li>

              <li class="nav-item p-2 mx-3">
                <Link to="/devops">Devops</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Bodyvalue;
