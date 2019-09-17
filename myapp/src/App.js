import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header'

class App extends Component {
  state = {
    project : [{name:'Test'},{name:'Given'}]
  }

  switchClickHandler = () => {
   // console.log('testing click!!!');
    this.setState({
      project : [{name:'Clicked Test'},{name:'Clicked Given'}]
    });
  }

  render(props) {
    return (
      //it use to display class based compononent
      <div className="App">
        <Header projectName={this.state.project[0].name}/>
        {/* <Header projectName={this.state.project[1].name}>Its replaced header</Header> */}
        <h1>Hi this is {this.props.name}</h1>
        <button onClick={this.switchClickHandler}>Click Here</button>
      </div>
      );
      // return React.createElement('div',{className:'App'},React.createElement('h1',null,'Testing page with React '));
  }
}

export default App;
