import React from 'react';
import Description from '../components/Description';

const MainPage = () => {
  const data = { title: 'Title', description: 'Description' };

  return <Description {...data} />;
};

export default MainPage;
