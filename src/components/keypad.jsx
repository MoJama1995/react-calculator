import React from "react";
import "../app.css";

const Keypad = props => {
  return (
    <div>
      <button
        className="ui black basic button "
        name="0"
        onClick={props.handleClick}
      >
        {" "}
        0
      </button>
      <button
        className="ui orange basic button"
        name="="
        onClick={props.submitResult}
      >
        {" "}
        =
      </button>
      <button
        className="ui green basic button"
        name="c"
        onClick={props.clearResult}
      >
        {" "}
        c
      </button>
      <br />

      <button
        className="ui black basic button"
        name="1"
        onClick={props.handleClick}
      >
        {" "}
        1
      </button>
      <button
        className="ui black basic button"
        name="2"
        onClick={props.handleClick}
      >
        {" "}
        2
      </button>
      <button
        className="ui black basic button"
        name="3"
        onClick={props.handleClick}
      >
        {" "}
        3
      </button>
      <button
        className="ui orange basic button"
        name="+"
        onClick={props.handleClick}
      >
        {" "}
        +
      </button>

      <br />
      <button
        className="ui black basic button"
        name="4"
        onClick={props.handleClick}
      >
        {" "}
        4
      </button>
      <button
        className="ui black basic button"
        name="5"
        onClick={props.handleClick}
      >
        {" "}
        5
      </button>
      <button
        className="ui black basic button"
        name="6"
        onClick={props.handleClick}
      >
        {" "}
        6
      </button>
      <button
        className="ui orange basic button"
        name="-"
        onClick={props.handleClick}
      >
        {" "}
        -
      </button>

      <br />
      <button
        className="ui black basic button"
        name="7"
        onClick={props.handleClick}
      >
        {" "}
        7
      </button>
      <button
        className="ui black basic button"
        name="8"
        onClick={props.handleClick}
      >
        {" "}
        8
      </button>
      <button
        className="ui black basic button"
        name="9"
        onClick={props.handleClick}
      >
        {" "}
        9
      </button>

      <button
        className="ui orange basic button"
        name="*"
        onClick={props.handleClick}
      >
        {" "}
        *
      </button>
    </div>
  );
};

export default Keypad;
