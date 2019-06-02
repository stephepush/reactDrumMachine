import React from "react";
import NameDisplay from "./NameDisplay";
//import SoundData from "./SoundData";

const buttonBottoms = {
  marginBottom: "5.5%"
};

class SoundButton extends React.Component {
  constructor(props) {
    super(props);
  }

  audio = new Audio(this.props.clipSrc);
  //console.log(this.mappedSoundObjects);

  playSound = () => {
    this.audio.play();
    this.audio.currentTime = 0;
    this.setState({
      sound: this.props.clipName
    });

    //console.log(this.props.clipName);
  };

  render() {
    return (
      <div>
        <button
          style={buttonBottoms}
          onClick={event => {
            this.playSound();
            this.props.logSound(this.props.clipName);
          }}
          className="clip myButton ui button"
        >
          {this.props.clipName} {this.props.key}
        </button>
      </div>
    );
  }
}

export default SoundButton;
