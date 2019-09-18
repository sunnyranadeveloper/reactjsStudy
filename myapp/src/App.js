import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header'

class App extends Component {
  state = {
    project : [{id:'1',name:'Test'},{id:'2',name:'Given'}],
    displayStatus : false
  }

  switchClickHandler = (newValue) => {
   // console.log('testing click!!!');
    this.setState({
      project : [{name:newValue}]
    });
  }

  // function will toggle content on click
  toggleContent = () => {
    const checkStatus = this.state.displayStatus;
    this.setState({displayStatus:!checkStatus});
  }
  //function will remove state element
  deleteRow = (arrayIndex) => {
    // const project = this.state.project; #it should not be done with reference it should be with copy of list
    const project = [...this.state.project];
    project.splice(arrayIndex,1);
    this.setState({project:project});
  }

  render(props) {
      // add dynamically JSX
    let toggleHtml = null;
    if(this.state.displayStatus) {
      toggleHtml = (
        <div>
          {this.state.project.map((pname,index) => {
            return (<div key={pname.id}><h1>Project Name : {pname.name}</h1><a href="javascript:void(0);" onClick={()=>this.deleteRow(index)}>remove</a></div>);
          })}
        </div>
      );
  }
    return (
      //it use to display class based compononent
      <div className="App">
        {this.state.project.map((pname,index) => {
          return (<Header projectName={pname.name} click={this.switchClickHandler.bind(this,'Hello!!!')} key={pname.id}/>);
        })}
        {/* <Header projectName={this.state.project[1].name}>Its replaced header</Header> */}
        <h1>Hi this is {this.props.name}</h1>
        <button onClick={this.switchClickHandler.bind(this,'Hi!!!')}>Click Here</button>
        
        {/* commenting this new standard of ES6 not efficient but we can use it prefer upper one*/}
        {/* <button onClick={() => this.switchClickHandler('Hi!!!')}>Outer</button> */}
        
        {/* code for conditional rendering */}
        <button onClick={this.toggleContent}>Toggle Content</button>
        {toggleHtml}
      </div>
      );
      // return React.createElement('div',{className:'App'},React.createElement('h1',null,'Testing page with React '));
  }
}

export default App;
