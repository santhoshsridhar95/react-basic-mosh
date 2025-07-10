import React, { useEffect } from "react";

const EffectCleanUp = () => {
  const connecting = () => {
    console.log("Connecting...");
  };
  const disconnecting = () => {
    console.log("Disconnecting...");
  };

  useEffect(() => {
    connecting();
    return () => disconnecting();
  });
  return <div></div>;
};

export default EffectCleanUp;
