import product from "../product";

function Description({ product }) {
  return <p className="description">{product.description}</p>;
}

export default Description;