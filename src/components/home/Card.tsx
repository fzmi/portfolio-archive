import React from 'react';
import { Link } from 'react-router-dom';
import "./Card.scss";

interface Props {
  id: string,
  name: string,
  stack: string[],
  description: string,
  image: any,
}

export const Card: React.FC<Props> = props => {
  return (
    <Link to={"project/" + props.id} className="Card p-4 mb-4 mx-md-1 row">
      <div className="col-lg-8">
        <h2 className="title"><strong>{props.name}</strong></h2>
        <div className="badges">
          {props.stack.map((badge, index) => {
            return (<div key={index} className="badge badge-dark">{badge}</div>);
          })}
        </div>
        <p className="text-muted mt-3 mb-lg-0">{props.description}</p>
      </div>
      <div className="col-lg-4 d-flex align-items-center">
        <img className="thumbnail" src={props.image} alt="Logo" />
      </div>
    </Link>
  );
}
