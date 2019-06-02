import React from "react";
const displayStyle = {
  marginTop: "5%"
};

function NameDisplay({ soundName }) {
  return (
    <div style={displayStyle} class="name-display">
      <p>{soundName}</p>
    </div>
  );
}

export default NameDisplay;
