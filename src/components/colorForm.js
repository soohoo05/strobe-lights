import React from "react";
import Slider from 'react-input-slider';
import Fade from 'react-reveal/Fade';

class colorForm extends React.Component {
  state = {
    error:"",
    red:this.props.red,
    green:this.props.green,
    blue:this.props.blue,
    alpha:this.props.alpha
  };
  componentDidMount(){
    this.changePreview()
  }
  changeHandler = e => {
    if(e.target.value < 256){
    this.setState({
      error:"",
      [e.target.name]:e.target.value
    },()=>{ this.changePreview()

    })

    this.props.changeColor(e.target.name,e.target.value)

  }
  else if(isNaN(e.target.value)){
    this.setState({
      error:"Numbers Only!"
    })
  }
  else{
    this.setState({
      error:`${e.target.name.charAt(0).toUpperCase()+ e.target.name.slice(1)} is too high!`
    })
  }
  };
  color = (e) =>{
    console.log(e)
  }
  changePreview = () =>{
    let preview = document.querySelector('.preview')
    preview.style.backgroundColor=`rgba(${this.state.red},${this.state.green},${this.state.blue},${this.state.alpha})`
  }
  render() {
    return (
      <Fade>
      <div className="colorForm">
      <h1 className="error">{this.state.error}</h1>
        <div className="rangeDiv">
          <div>
            <label className="rangeInput">Red</label>
            <input
              name="red"
              onChange={(e) => {
                this.changeHandler(e);
              }}
              value={this.state.red}
              type="text"
              placeholder="0"
              className="numInput"
            />

            </div>
          <Slider
            styles={{
              track:{
                width:450
              },
              active:{
                backgroundColor:'black'
              }
            }}
            min="0"
            xmax="255"
            xstep="1"
            className="rangeInput"
            axis="x"
            x={this.state.red}
            onChange={({ x }) =>{

              this.setState({red: x },()=>{this.changePreview()})
               this.props.changeColor('red',x)}   }       />

        </div>
        <div className="rangeDiv">
          <div>
            <label className="rangeInput">Green</label>
            <input
              name="green"
              onChange={(e) => {
                this.changeHandler(e);
              }}
              value={this.state.green}
              type="text"
              placeholder="0"
              className="numInput"
            />

            </div>
          <Slider
            styles={{
              track:{
                width:450
              },
              active:{
                backgroundColor:'black'
              }
            }}
            min="0"
            xmax="255"
            xstep="1"
            className="rangeInput"
            axis="x"
            x={this.state.green}
            onChange={({ x }) =>{

              this.setState({green: x },()=>{this.changePreview()})
               this.props.changeColor('green',x)}
             }
          />
        </div>
        <div className="rangeDiv">
          <div>
            <label className="rangeInput">Blue</label>
            <input
              name="blue"
              onChange={(e) => {
                this.changeHandler(e);
              }}
              value={this.state.blue}
              type="text"
              placeholder="0"
              className="numInput"
            />

            </div>
          <Slider
            styles={{
              track:{
                width:450
              },
              active:{
                backgroundColor:'black'
              }
            }}
            min="0"
            xmax="255"
            xstep="1"
            className="rangeInput"
            axis="x"
            x={this.state.blue}
            onChange={({ x },e) =>{

              this.setState({blue: x },()=>{this.changePreview()})
               this.props.changeColor('blue',x)}
             }
          />
        </div>
        <div className="rangeDiv">
          <div>
            <label className="rangeInput">Alpha</label>
            <input
              name="alpha"
              onChange={(e) => {
                this.changeHandler(e);
              }}
              value={this.state.alpha}
              type="text"
              placeholder="0"
              className="numInput"
            />

            </div>
          <Slider
            styles={{
              track:{
                width:450
              },
              active:{
                backgroundColor:'black'
              }
            }}
            min="0"
            xmax="1"
            xstep="0.01"
            className="rangeInput"
            axis="x"
            x={this.state.alpha}
            onChange={({ x }) =>{

              this.setState({alpha: x },()=>{this.changePreview()})
               this.props.changeColor('alpha',x)}
             }
          />
        </div>
        <p align="center">Color Preview</p>
        <div className="preview"></div>
        <button onClick={()=>this.props.closeMenu()}className="startButton">Start!</button>
      </div>
      </Fade>
    );
  }
}

export default colorForm;
