import React from 'react';
import Directory from '../../components/pages/home-page/directory/Directory';
import './home-page.scss';
import data from '../../data/directoryData.js';

const HomePage = () => (
  <div className="homepage">
    <Directory data={data} />
  </div>
);

export default HomePage;
