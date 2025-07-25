import React, { useState } from "react";

interface Props {
  children: string;
  maxChars?: number;
}

const ExpandableText = ({ children, maxChars = 100 }: Props) => {
  const [isExpandable, setExpandable] = useState(false);

  //   if (children.length <= maxChars) return <p>{children}</p>;
  const text = isExpandable ? children : children.substring(0, maxChars);
  return (
    <p>
      {text}...
      <button onClick={() => setExpandable(!isExpandable)}>
        {isExpandable ? "Less" : "More"}
      </button>
    </p>
  );
};

export default ExpandableText;
