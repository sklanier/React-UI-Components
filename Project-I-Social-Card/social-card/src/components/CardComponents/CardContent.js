import React from 'react';
import './Card.css';

const CardContent = () => {
  return (
    <div className="banner-bottom">
      <p className="banner-content">Get started with React</p>
      <p className="banner-content">
        React is pretty neat. React is also pretty confusing. But I think I will like React. Time will tell.
      </p>
      <a
        href="http://reactjs.org"
        className="banner-content header-content link"
      >
        reactjs.org
      </a>
    </div>
  );
};
export default CardContent;