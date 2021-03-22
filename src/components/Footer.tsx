import React from 'react';

type FooterProps = {};

const Footer: React.FC<FooterProps> = (props) => {
  return (
    <footer>
      &copy;2021 - <a href={process.env.REACT_APP_PROFILE_PAGE} target="_blank" rel="noopener noreferrer">page3</a>
    </footer>
  )
};

export default Footer
