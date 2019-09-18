import React from 'react';
import './menuItems.scss';

const menuItems = ({ title, id, imageUrl, size }) => {
  return (
    <div className={size ? `${size} menu-item` : 'menu-item'}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="content">
        <div className="title">{title}</div>
        <span className="subtitle">Shop Now</span>
      </div>
    </div>
  );
};

export default menuItems;
