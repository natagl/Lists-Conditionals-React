import React from 'react';


const validation = (props) => {
    let validationMessage = 'Text long enough'

     if(props.inputLength <=5){
         validationMessage = 'Text is too short'

     }
    return (
        <div>
            <p>{validationMessage}</p>
            {/* {
                props.inputLength > 5 ?
                    <p>Text long enough</p> :
                    <p>Text to short!</p>

            } */}
        </div>
    )
}
export default validation;
