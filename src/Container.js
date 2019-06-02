import React from "react";
import SoundButton from "./SoundButton";
import SoundData from "./SoundData";
import NameDisplay from "./NameDisplay";

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sound: "press a button!"
    };
  }

  logTheSound = clipName => {
    this.setState({
      sound: clipName
    });
    //console.log(this.state.sound);
  };

  render() {
    const ButtonComponents = SoundData.map(button => (
      <SoundButton
        //onClick={this.playSound}
        key={button.keyLetter}
        button={button.togglePlay}
        clipSrc={button.clipSrc}
        clipName={button.clipName}
        //clip={this.state.sound}
        logSound={this.logTheSound}
      >
        {button.clipName} {button.key}
      </SoundButton>
    ));
    return (
      <div>
        <main id="display">{ButtonComponents}</main>
        <NameDisplay soundName={this.state.sound} />
      </div>
    );
  }
}

export default Container;
