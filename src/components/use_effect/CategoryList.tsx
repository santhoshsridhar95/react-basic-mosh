import React, { useState } from "react";

// interface Props {
//   setSelectedCategory: (data: string) => void;
// }

const CategoryList = ({
  setSelectedCategory,
}: {
  setSelectedCategory: (data: string) => void; //inline declaration
}) => {
  return (
    <select
      className="form-select"
      onChange={(event) => {
        setSelectedCategory(event.target.value);
      }}
    >
      <option value=""></option>
      <option value="Clothing">Clothing</option>
      <option value="Furniture">Furniture</option>
    </select>
  );
};

export default CategoryList;
