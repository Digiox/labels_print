import React from 'react';
import './Box.css'
const Box = (props) => {
    return ( 
        <div id='item'>
            {props.children}
        </div>
     );
}
 
export default Box;