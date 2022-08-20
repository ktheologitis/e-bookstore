import BasketProductCard from "../../components/BasketProductCard/BasketProductCard";
import PageHeader from "../../components/PageHeader/PageHeader";

const BasketPage = () => {
  return (
    <main className="basket-page">
      <PageHeader title="My Basket" />
      <BasketProductCard
        title="Book 1"
        amount_selected={1}
        price={25.55}
        stock={3}
      />
    </main>
  );
};

export default BasketPage;
