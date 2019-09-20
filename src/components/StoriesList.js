import React from 'react';
import Story from './Story';
import PropTypes from 'prop-types';

const StoriesList = ({news}) => {
  return (
    <div className="row">
      {news.map(singleNew => {
        return (
          <Story
            key={singleNew.url}
            singleNew={singleNew} />
        );
      })}
    </div>
  );
};

StoriesList.propTypes = {
  news: PropTypes.array.isRequired
};

export default StoriesList;
