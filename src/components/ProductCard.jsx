function ProductCard({ product }) {
  const { category, name, price } = product;

  return (
    <div className="card">
      <small>{category}</small>
      <h3>{name}</h3>
      <p>{price.toLocaleString()}원</p>
    </div>
  );
}

export default ProductCard;
