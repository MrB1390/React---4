import React,{useState,useEffect} from 'react';
import Card from './Card';
const Devops = ({course}) => {
    const [dev, setDev] = useState([]);

    useEffect(() => {
      setDev(course.filter((item) => item.head === "Devops"));
    }, [course]);
  return (
    <div>
      <h1>Front-end</h1>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        {dev.map((item, index) => {
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

export default Devops;