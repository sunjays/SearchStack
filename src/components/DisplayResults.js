
import React from 'react';

import './DisplayResults.css';

import Card from './Card';



const DisplayResults = (props) => {

  let resultItems = [];

  props.items.map((item,i) => 

    resultItems.push(<Card key={i} item={item}/>)

  )

  return (

    <div className="displayresults">

     {resultItems}

    </div>

      );

}



export default DisplayResults;
