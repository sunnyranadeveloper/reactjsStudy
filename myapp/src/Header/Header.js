import React, {useState} from 'react';

const header = (props) => {
    const [headerState,setHeaderState] = useState({
        projectName : [{name: "Inner 1"},{name: "Inner 2"}]
    });
    const switchClickHandler = () => {
        setHeaderState({
            projectName : [{name: "Inner 1 Clicked"},{name: "Inner 2 Clicked"}]
        });
    }
    //it use to display function based compononent
    return (
        <div>
            <h2>Hi I am a header {props.projectName}</h2>
            <p>{props.children}</p>
            <p>Inner text : {headerState.projectName[0].name}</p>
            <p>Inner text : {headerState.projectName[1].name}</p>
            <button onClick={switchClickHandler}>Click Here</button>
            {/* replica of out button */}
            <button onClick={props.click}>Outer copy</button>
        </div>
    );
}

export default header;