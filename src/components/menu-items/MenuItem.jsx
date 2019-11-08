import React from 'react';
import { withRouter } from 'react-router-dom'
import './menuItem.scss';

const menuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div className={size ? `${size} menu-item` : 'menu-item'}
    onClick={() => history.push(`${match.url}${linkUrl}`)}>
    {console.log(match)}
    <div className="background-image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    ></div>
    <div className="content">
      <div className="title">{title}</div>
      <span className="subtitle">Shop Now</span>
    </div>
  </div>
);

export default withRouter(menuItem);
