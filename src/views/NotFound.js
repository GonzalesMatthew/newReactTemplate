import React from 'react';
import PropTypes from 'prop-types';

function NotFound() {
  return (
    <>
      This is a blank page ...
    </>
  );
}

NotFound.propTypes = {
  admin: PropTypes.any,
  user: PropTypes.any,
  aboutMe: PropTypes.array,
  setAboutMe: PropTypes.func,
};

export default NotFound;
