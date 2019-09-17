import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header'

class App extends Component {
  state = {
    project : [{name:'Test'},{name:'Given'}]
  }

  switchClickHandler = (newValue) => {
   // console.log('testing click!!!');
    this.setState({
      project : [{name:newValue},{name:'Clicked Given'}]
    });
  }

  render(props) {
    return (
      //it use to display class based compononent
      <div className="App">
        <Header projectName={this.state.project[0].name} click={this.switchClickHandler.bind(this,'Hello!!!')}/>
        {/* <Header projectName={this.state.project[1].name}>Its replaced header</Header> */}
        <h1>Hi this is {this.props.name}</h1>
        <button onClick={this.switchClickHandler.bind(this,'Hi!!!')}>Click Here</button>
        
        {/* commenting this new standard of ES6 not efficient but we can use it prefer upper one*/}
        {/* <button onClick={() => this.switchClickHandler('Hi!!!')}>Outer</button> */}
      </div>
      );
      // return React.createElement('div',{className:'App'},React.createElement('h1',null,'Testing page with React '));
  }
}

export default App;
