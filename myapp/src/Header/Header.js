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
    const changeValue = (event) => {
        setHeaderState({
            projectName : [{name: event.target.value},{name: "Inner 2 Clicked"}]
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
            {/* Example of two way binding !!! if you use () then it will call function on load*/}
            {/* Two way binding means it 
                1. read data from DOM like reading from p tag
                2. It write data in DOM like on change it is writing data in p tag. 
            */}
            <input type="text" name="test" onChange={changeValue} value={headerState.projectName[0].name} />
        </div>
    );
}

export default header;