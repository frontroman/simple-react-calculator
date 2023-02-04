import React, {useState} from 'react';
import '../style/Display.css'

const Display = ({...props}) => {


    return (
        <div>
            <input value={props.value} className={"display"} type="text" />
        </div>
    );
};

export default Display;