import React from 'react';
import Description from '../components/Description';

const AboutPage = () => {
  const data = { title: 'Title 2', description: 'Description 2' };

  return <Description {...data} />;
};

export default AboutPage;
