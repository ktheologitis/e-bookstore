import "./product-card.scss";

const ProductCard = ({ title, price, stock, img }: ProductCardProps) => {
  return (
    <article className="product-card">
      <header className="product-card__img">
        <img src={img} alt="book" />
      </header>
      <main className="product-card__details">
        <h2>{title}</h2>
        <p>{price}</p>
        <p>{stock}</p>
      </main>
    </article>
  );
};

export default ProductCard;

type ProductCardProps = {
  title: string;
  price: string;
  stock: string;
  img: string;
};
