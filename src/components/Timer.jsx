import React from "react";

const Timer = ({ secondes, minutes }) => {
  return (
    <>
      <span id='minutes'>{minutes < 10 ? `0${minutes}` : minutes}</span>
      <span>:</span>
      <span id='secondes'>{secondes < 10 ? `0${secondes}` : secondes}</span>
    </>
  );
};

export default Timer;
