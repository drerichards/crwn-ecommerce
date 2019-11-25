import React from 'react';
import { withRouter } from 'react-router-dom'
import './directory-item.scss';

const DirectoryItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div className={size ? `${size} directory-item` : 'directory-item'}
    onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <div className="background-image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    ></div>
    <div className="content">
      <div className="title">{title}</div>
      <span className="subtitle">Shop Now</span>
    </div>
  </div>
);

export default withRouter(DirectoryItem);
