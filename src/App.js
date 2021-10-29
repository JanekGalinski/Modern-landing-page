import React from 'react';
import './App.css';
import Nav from './Components/Nav/Nav';


class App extends React.Component {
    constructor(){
        super();
        this.state = {

        }
    }

 render() {    
    return (
      <>
        <Nav></Nav>
      </>
    )
  }
}

export default App;
