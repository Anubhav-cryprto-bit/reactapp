import React from 'react';
import { InfoSection, Pricing } from '../../components';
import Serv from '../../components/serv/index.js'
import { homeObjOne, homeObjThree } from './Data';

function Services() {
  return (
    <>
      <Pricing />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjThree} />
    </>
  );
}

export default Services;
