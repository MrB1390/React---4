import React,{useState,useEffect} from 'react';
import Card from './Card';

const Backend = ({course}) => {
    const [backFilter, setBackFilter] = useState([]);

    useEffect(() => {
      setBackFilter(course.filter((item) => item.head === "Back End Development"));
    }, [course]);
  return (
    <div>
      <h1>Front-end</h1>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        {backFilter.map((item, index) => {
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

export default Backend;