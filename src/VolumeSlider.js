import React from "react";

function VolumeSlider(props) {
  return (
    <div>
      <label htmlFor="volume">Volume</label>
      <input
        type="range"
        id="start"
        name="volume"
        min="0"
        max="10"
        step=".5"
        value={props.volumeLevel}
        onChange={props.onChange}
      />
    </div>
  );
}

export default VolumeSlider;
