import React from "react";
import { Helmet } from "react-helmet";
import icon from "./icon.svg";

import SoundButton from "./SoundButton";
import SoundData from "./SoundData";
import NameDisplay from "./NameDisplay";
import PowerSwitch from "./PowerSwitch";
import VolumeSlider from "./VolumeSlider";
import Heading from "./Heading";

class Container extends React.Component {
  constructor(props) {
    super(props);

    this.handlePowerState = this.handlePowerState.bind(this);
    this.state = {
      sound: "press a button!",
      powered: true,
      volume: 8
    };
  }

  changeVolumeRange = event => {
    this.setState({ volume: event.target.value });
  };

  handleKeyPress = event => {
    console.log(event.key);

    this.setState({ lastPressedKey: event.key });
  };

  logTheSound = clipName => {
    this.setState({
      sound: clipName
    });
    console.log(this.state.sound);
  };

  handlePowerState() {
    this.setState({
      powered: !this.state.powered
    });
  }

  componentDidUpdate() {
    document.addEventListener("keydown", this.keyboardPlaySound);
  }

  render() {
    const ButtonComponents = SoundData.map(button => (
      <SoundButton
        //onClick={this.playSound}
        key={button.keyLetter}
        lastPressedKey={event => this.state.lastPressedKey(event)}
        onKeyDown={this.handleKeypress}
        isPowered={this.state.powered}
        keyLetter={button.keyLetter}
        button={button.togglePlay}
        clipSrc={button.clipSrc}
        clipName={button.clipName}
        volumeLevel={this.state.volume}
        //clip={this.state.sound}
        logSound={this.logTheSound}
        tabIndexValue={this.tabIndexValue}
      >
        {button.key}
      </SoundButton>
    ));
    return (
      <div className="machine-container">
        <Helmet>
          <meta charSet="utf-8" />
          <title lang="en">Stephen's Drum Machine</title>
          <link
            rel="shortcut icon"
            href={icon}
            sizes="any"
            type="image/svg+xml"
          />
        </Helmet>
        <Heading />
        <main className="button-container">{ButtonComponents}</main>
        <div className="mutation-container">
          <PowerSwitch
            isPowered={this.state.powered}
            onChange={this.handlePowerState}
          />
          <NameDisplay
            isPowered={this.state.powered}
            soundName={this.state.sound}
          />
          <VolumeSlider
            onChange={this.changeVolumeRange}
            volumeLevel={this.state.volume}
          />
        </div>
      </div>
    );
  }
}

export default Container;
