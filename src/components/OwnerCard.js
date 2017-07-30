
import React from 'react';

const Owner = (props) => {

    return(

        <div className="owner">

          <label className="owner-name">{props.display_name}</label>

          <img alt="display_image" width="50" height="50" src={props.profile_image} />

        </div>

    )

}



export default Owner;
