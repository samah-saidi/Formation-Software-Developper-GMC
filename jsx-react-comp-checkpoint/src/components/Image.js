import product from "../product";

function Image({ product }) {
  return (
    <img
      src={product.imageUrl}
      alt={product.name}
      className="product-image"
    />
  );
}

export default Image;