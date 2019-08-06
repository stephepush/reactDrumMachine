import React from "react";
/* const displayStyle = {
  marginTop: "5%"
}; */

function NameDisplay(props) {
  return (
    <div /* style={displayStyle} */ className="name-display-container">
      {props.isPowered ? (
        <p className="name-display-container-paragraph">{props.soundName}</p>
      ) : (
        <p className="name-display-container-paragraph">Powered Off</p>
      )}
    </div>
  );
}

NameDisplay.defaultProps = {
  soundName: "Press a button!"
};

export default NameDisplay;
