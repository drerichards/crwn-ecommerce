import React from 'react';
import Directory from './directory/Directory';
import './homepage.scss';
import data from '../data/directoryData.js';

const Homepage = () => {
  return (
    <div className="homepage">
      <Directory data={data} />
    </div>
  );
};

export default Homepage;
