import React, { useState } from 'react';
import MenuItem from '../menu-items/MenuItem';
import './directory.scss';

const Directory = ({ data }) => {
  const [directoryState, setDirectoryState] = useState(data);

  return (
    <div className="directory-menu">
      {directoryState.map(({ id, ...sectionProps }) => {
        return (
          <MenuItem key={id} {...sectionProps} />
        );
      })}
    </div>
  );
};

export default Directory;
