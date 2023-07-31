import main from './images/main.jpeg';
import drawings from './resources/drawings.json'
import './App.css';
import Drawing from './Drawing';
import React from 'react';
import Video from './Video';
import Letter from "./Letter.js"
import notes from "./resources/notes.json"
import videos from "./resources/videos.json"

const modalMap = {
  "Bear": <Video src={videos["Bear"]}/>,
  "Cake": <Letter text={notes["Cake"]}/>,
  "Line":<Letter text={notes["Dash"]}/>,
  "165": <Letter text={notes["165"]}/>,
  "Stick": <Video src={videos["Stick"]}/>,
  "Diving Board": null,
  "Jersey": <Letter text={notes["Jersey"]}/>,
  "Cello":<Letter text={notes["Violin"]}/>,
  "Beer":<Letter text={notes["Butterbeer"]}/>,
  "Cube": <Letter text={notes["Cube"]}/>,
  "Saints":<Letter text={notes["Saints"]}/>,
  "Crutches":<Letter text={notes["Crutches"]}/>,
  "Mom": <Video src={videos["Mom"]}/>,
  "Comb": null,
  "Gift":<Video src={videos["Gift"]}/>,
  "Whip": <Video src={videos["Whip"]}/>,
  "SigEp": <><Video src={videos["SigEp"]}/><Letter text={notes["SigEp"]}/></>,
  "Glue": <Letter text={notes["Glue"]}/>,
  "Football": <Video src={videos["Football"]}/>,
  "Banana":<Letter text={notes["Peel"]}/>
}

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      imgHeight: 0,
      imgWidth: 0
    };
  }

  componentDidMount() {
    this.setState({
      imgHeight: this.Main.clientHeight,
      imgWidth: this.Main.clientWidth
    });
  }

  componentDidUpdate() {
    if(this.state.imgHeight !== this.Main.clientHeight || this.state.imgWidth !== this.Main.clientWidth){
      this.setState({
        imgHeight: this.Main.clientHeight,
        imgWidth: this.Main.clientWidth
      });
    }
  }

  getOnClickContent(name){
    return modalMap[name] === null ? "Coming Soon! Happy birthday!" : modalMap[name];
  }
  
  render() {
    return (
      <div className="App">
        <img id="main" className="main" alt="Guy Hunt Birthday" ref={(elem) => this.Main = elem} src={main} useMap="#modal"/>
        <map name="modal" id="modal">
          {drawings.map(drawing => {
            return <Drawing coords={drawing.areaCoordinates} altText={drawing.name} imgHeight={this.state.imgHeight} imgWidth={this.state.imgWidth}>{this.getOnClickContent(drawing.name)}</Drawing>
          })}
        </map>
      </div>
    );
  }
}

export default App;
