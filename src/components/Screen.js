import React from 'react';
import Fade from 'react-reveal/Fade';

class Screen extends React.Component {
  componentDidMount(){
    let screen = document.querySelector('.screen')
    screen.style.backgroundColor=`rgba(${this.props.red},${this.props.green},${this.props.blue},${this.props.alpha})`

  }
  componentDidUpdate(prevProps){
    if((this.props.red !==prevProps.red) || (this.props.green !==prevProps.green) ||(this.props.blue !==prevProps.blue) || (this.props.alpha !==prevProps.alpha)){
      let screen = document.querySelector('.screen')
      screen.style.backgroundColor=`rgba(${this.props.red},${this.props.green},${this.props.blue},${this.props.alpha})`
      
    }
  }
  render() {
    return (
      <Fade>
      <div className="screen"></div>
      </Fade>
    )
  }
}

export default Screen;
