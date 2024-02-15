import React from 'react';

const Card = ({item,index}) => {
    return (
        <div>
            <div key={index}>
                <div class="col">
                  <div class="card h-100">
                    <img src={item.img} alt="Image"  className='card-img-top'/>
                    <div class="card-body text-center">
                      <h5 class="card-title">{item.head}</h5>
                      <p class="card-text">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
        </div>
    );
};

export default Card;