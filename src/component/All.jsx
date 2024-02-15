import React from "react";
import Card from "./Card";

const All = ({course}) => {
  return (
    <div>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        {course.map((item, index) => {
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

export default All;
