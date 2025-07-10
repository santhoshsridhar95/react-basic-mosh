import React, { useEffect, useState } from "react";

const ProductList = ({ category }: { category: string }) => {
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    console.log("Fetching Products " + category);
    setProducts(["pen", "pencil"]);
  }, [category]);
  return <div>ProductList</div>;
};

export default ProductList;
