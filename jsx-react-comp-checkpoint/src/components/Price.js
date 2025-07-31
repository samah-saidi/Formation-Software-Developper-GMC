import React from "react";
import product from "../product";

function Price({ product }) {
  return <h4 style={{ color: "#28a745" }}>{product.price}</h4>;
}

export default Price;