import React from 'react';
import HeaderContent from './HeaderContent';
import './Header.css';


const HeaderTitle = () => {
  return (
    <div className="header-title-wrapper">
      <div className="header-title">
        Lambda School Peeps
        <span className="time-stamp">25 or 6 to 4</span>
        <HeaderContent />
      </div>
    </div>
  );
};

export default HeaderTitle;