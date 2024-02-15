import React,{useState,useEffect} from 'react';
import Card from './Card';
const Fullstack = ({course}) => {
    const [full, setFull] = useState([]);

    useEffect(() => {
      setFull(course.filter((item) => item.head === "Full Stack Development"));
    }, [course]);
  return (
    <div>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        {full.map((item, index) => {
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

export default Fullstack;