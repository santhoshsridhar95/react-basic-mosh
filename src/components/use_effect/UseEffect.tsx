import React, { useEffect, useRef } from "react";

const UseEffect = () => {
  const ref = useRef<HTMLInputElement>(null);

  //Could be called as afterRender
  useEffect(() => {
    if (ref.current) ref.current.focus();
  });

  useEffect(() => {
    document.title = "My App";
  });
  return <input ref={ref} type="text" className="form-control" />;
};

export default UseEffect;
