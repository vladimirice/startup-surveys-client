import React from 'react';

type CardProps = {
  imgAlt: string;
  imgSrc: string; // http://lorempixel.com/output/nature-q-c-1280-200-3.jpg
  title: string; // Add more credits
  content: string; // To use this service you have to buy credits. One credit = one survey. Min amount to buy - 5 credits.
  action: any; // <Payments/>
}

const CardImage = (props: CardProps) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={props.imgSrc} alt={props.imgAlt}/>
      </div>

      <div className="card-content">
        <span className="card-title">{props.title}</span>
        <p>{props.content}</p>
      </div>
      <div className="card-action">
        {props.action}
      </div>
    </div>
    )
};

export default CardImage;
