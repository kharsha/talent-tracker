import * as React from "react";
import ReactDOM from "react-dom";
import logo from './logo.svg';
import './App.css';
import Header1 from './Header/header'
import ModalitySelect from './ModalitySelect/modalityselect'

import TechCompitency from './TechComptiency/TechCompitency'
import TechIndex from './TechIndex/techindex'


class App extends React.Component{
  
  state = { modalityId:1} 

  /**
   *
   */
  constructor(props) {
    super(props);
    this.setState(
      {
        modalityId:3
      }
    )
  }
  selectedChanged = (selecteditem) =>
  {
    this.setState({
     modalityId:selecteditem.value
    }
    

    )
   // this.forceUpdate();
//this.render();
   // console.log(this.state);
//console.log(selecteditem);
  };

  render() {
  return (
    <div className="App">
     <Header1 ></Header1>
     <ModalitySelect selectedChange={this.selectedChanged} modalityId={this.state.modalityId}></ModalitySelect>
 
    <TechIndex ModalityId={this.state.modalityId}></TechIndex>
    
    </div>
  );
}
}

export default App;
