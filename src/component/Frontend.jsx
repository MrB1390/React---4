import React, { useState,useEffect } from "react";
import Card from "./Card";

const Frontend = ({ course }) => {
    const [frontFilter, setFrontFilter] = useState([]);

    useEffect(() => {
      setFrontFilter(course.filter((item) => item.head === "Front End Development"));
    }, [course]);
  return (
    <div>
      <h1>Front-end</h1>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        {frontFilter.map((item, index) => {
          return (
            <>
              <Card item={item} index={index} />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Frontend;
