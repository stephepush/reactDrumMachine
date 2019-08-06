import React from "react";

function PowerSwitch(props) {
  return (
    <form>
      <div className="switch-field">
        <input
          type="checkbox"
          className="toggle"
          onChange={props.onChange}
          checked={props.isPowered}
        />
      </div>
    </form>
  );
}

export default PowerSwitch;
