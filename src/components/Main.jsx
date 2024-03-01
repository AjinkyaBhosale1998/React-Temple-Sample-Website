import React from 'react';
import templeImage from './assets/temple.jpg';
// import omImage from './assets/om.jpg';

const Main = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${templeImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white', 
    paddingTop: '100px'
  };

  return (
    <div style={backgroundImageStyle}>
      <h1>Main Content</h1>
    </div>
  );
};

export default Main;
