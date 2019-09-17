import React from 'react';

const header = (props) => {
    return (
        <div>
            <h2>Hi I am a header {props.projectName}</h2>
            <p>{props.children}</p>
        </div>
    );
}

export default header;