type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  console.log(product);
  return <div>Hello world from product card.</div>;
};

export default ProductCard;
