import React from 'react';

import './styles/cardStyle.scss';

export interface Props {
    title: string;
    content: string;
}

export default function Card(props: Props) {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-header-title">
          {props.title}
        </div>
      </div>
      <div className="card-body">
        <div className="card-body-content">
          {props.content}
        </div>
      </div>
    </div>
  );
}