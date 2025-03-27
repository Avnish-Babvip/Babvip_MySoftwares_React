import React from 'react'
import Style1 from './Style1'
import Style2 from './Style2';
import Style3 from './Style3';

import Style5 from './Style5';
import Style4 from './Style4';


const ServicesStyle = ({data,styleName}) => {

  const componentMap = {
    "Style 1": Style1,
    "Style 2": Style2,
    "Style 3": Style3,
    "Style 4": Style4,
    "Style 5": Style5,
  };
 
  const Component =  componentMap[styleName]

  return (
          <Component data={data} />
)

}

export default ServicesStyle