import React from "react";

//import SoundData from "./SoundData";

/* const buttonBottoms = {
  marginBottom: "5.5%"
}; */

class SoundButton extends React.Component {
  audio = new Audio(this.props.clipSrc);

  //console.log(this.mappedSoundObjects);

  componentDidMount() {
    document.addEventListener("keydown", this.keyboardPlaySound);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.keyboardPlaySound);
  }

  playSound = event => {
    this.props.isPowered && this.audio.play();

    this.audio.currentTime = 0;
    this.props.logSound(this.props.clipName);
    //this.audio.volume = this.props.volumeLevel;
  };

  keyboardPlaySound = event => {
    //console.log(e.key);
    //console.log(this.state.lastKeyPressed);
    if (this.key === this.props.keyLetter) {
      this.props.isPowered && this.audio.play();

      this.audio.currentTime = 0;
      this.props.logSound(this.props.clipName);
      //this.audio.volume = this.props.volumeLevel;
    }
  };

  render() {
    return (
      <button
        //style={buttonBottoms}
        isPowered={this.props.isPowered}
        onClick={event => {
          this.playSound();

          //this.props.logSound(this.props.clipName);
        }}
        //onKeyDown={this.handleKeyPress}
        onKeyDown={event => {
          this.keyboardPlaySound();
        }}
        tabIndex={this.tabIndexValue}
        //className="clip myButton ui button"
        className="buttons"
      >
        {this.props.keyLetter}
      </button>
    );
  }
}

export default SoundButton;
