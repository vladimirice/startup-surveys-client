import React, { FunctionComponent } from 'react';

interface CardProps {
  imgAlt: string;
  imgSrc: string;
  title: string;
  content: string;
  action: React.ReactNode;
}

const CardImage: FunctionComponent<CardProps> = (props: CardProps): JSX.Element => (
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
);

export default CardImage;
