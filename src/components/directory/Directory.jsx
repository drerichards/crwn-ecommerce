import React, { useState } from 'react';
import MenuItem from '../menu-items/MenuItem';
import './directory.scss';

const Directory = ({ data }) => {
  const [directoryState, setDirectoryState] = useState(data);

  return (
    <div className="directory-menu">
      {directoryState.map(({ title, id, imageUrl, size }) => {
        return (
          <MenuItem title={title} imageUrl={imageUrl} size={size} key={id} />
        );
      })}
    </div>
  );
};

export default Directory;
