import React, { useState } from 'react';
import DirectoryItem from './directory-items/DirectoryItem';
import './directory.scss';

const Directory = ({ data }) => {
  const [directoryState, setDirectoryState] = useState(data);

  return (
    <div className="directory-menu">
      {directoryState.map(({ id, ...sectionProps }) => {
        return (
          <DirectoryItem key={id} {...sectionProps} />
        );
      })}
    </div>
  );
};

export default Directory;
