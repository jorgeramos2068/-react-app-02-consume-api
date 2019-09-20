import React from 'react';
import PropTypes from 'prop-types';

const Story = ({singleNew}) => {
  // Get data
  const {urlToImage, url, title, description, source} = singleNew;
  const image = (urlToImage)
    ? 
    <div className="card-image">
      <img src={urlToImage} alt={title} />
      <span className="card-title">{source.name}</span>
    </div>
    :
    null;
  return (
    <div className="col s12 m6 l4">
      <div className="card">
        {image}
        <div className="card-content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className="card-action">
          <a href={url} target="_blank" className="waves-effect waves-light btn"
            rel="noopener noreferrer">
            Read full story
          </a>
        </div>
      </div>
    </div>
  );
};

Story.propTypes = {
  singleNew: PropTypes.object.isRequired
};

export default Story;
