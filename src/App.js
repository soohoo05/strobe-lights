import React from "react";
import "./App.css";
import "./hamburgers.css";

import ColorForm from "./components/colorForm";
import Screen from "./components/Screen";
import Slide from 'react-reveal/Slide'
class App extends React.Component {
  state = {
    menu: false,
    red:"0",
    green:"0",
    blue:"0",
    alpha:"0",
    blink: "rgba(0, 0, 0, 0)",
    on: false,
    timing: "1"
  };
  onOff = () => {
    this.setState({
      on: !this.state.on
    });
  };

  blinkChanger = () => {};

  changeColor = (name,value) => {
    this.setState({
      [name]:value
    })

  };
  openMenu = () => {
    let menu=document.querySelector('#menu')
    if(this.state.menu){
      menu.className='hamburger hamburger--vortex'
      this.logoBurgerColor()

    }
    else{
      menu.className='hamburger hamburger--vortex is-active'
      let logo=document.querySelector('.logo')
      logo.style.color='black';
      // let hamburgerBox=document.querySelector('.hamburger-box')
      // hamburgerBox.style.backgroundColor='white'
    }
    this.setState({ menu: !this.state.menu ,on:false});
  };
  closeMenu = () =>{
    let menu=document.querySelector('#menu')
    menu.className='hamburger hamburger--vortex'
    this.logoBurgerColor()
    this.setState({
      menu: false,
      on:true
    })
  }
  logoBurgerColor = () =>{


	var yiq = ((this.state.red*299)+(this.state.green*587)+(this.state.blue*114))/1000;
  var opacity= this.state.alpha
  if(yiq >= 128 ||opacity<0.5){
      let logo=document.querySelector('.logo')
      logo.style.color='black';

    }
    else{
      let logo=document.querySelector('.logo')
      logo.style.color='white';
      let hamburger=document.querySelector('.hamburger')
      hamburger.style.backgroundColor='white'

    }
  }
  setBlink = (value) =>{
      this.setState({
        blink:value
      })
  }
   render() {
    return (
      <div className="App">
        <div className="logoBurger">
          <h1 className="logo">Strobelobo!</h1>

          <button id="menu" onClick={() => this.openMenu()} className="hamburger hamburger--vortex" type="button">
  <span className="hamburger-box">
    <span className="hamburger-inner"></span>
  </span>
</button>

        </div>
        {this.state.menu ? (
          <ColorForm
            closeMenu={this.closeMenu}
            onOff={this.onOff}
            blinkChanger={this.blinkChanger}
            changeColor={this.changeColor}
            red={this.state.red}
            green={this.state.green}
            blue={this.state.blue}
            alpha={this.state.alpha}
            blink={this.state.blink}
            setBlink={this.setBlink}
          />
        ) : null}
        <Screen
          red={this.state.red}
          green={this.state.green}
          blue={this.state.blue}
          alpha={this.state.alpha}
          timing={this.state.timing}
          on={this.state.on}
          blink={this.state.blink}
        />
      </div>
    );
  }
}

export default App;
