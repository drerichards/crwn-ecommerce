import React from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectDirectorySections } from '../../../../redux/directory/directorySelectors'

import DirectoryItem from './directory-items/DirectoryItem';
import './directory.scss';

const Directory = ({ collections }) => {
  return (
    <div className="directory-menu">
      {collections.map(({ id, ...sectionProps }) => {
        return (
          <DirectoryItem key={id} {...sectionProps} />
        )
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory)
