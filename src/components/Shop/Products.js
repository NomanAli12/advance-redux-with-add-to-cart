import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 10,
    title: "My First Book",
    description: "The First Book i ever read",
  },
  {
    id: "p2",
    price: 15,
    title: "My Second Book",
    description: "The Second Book i ever read",
  },
  {
    id: "p3",
    price: 20,
    title: "My First Book",
    description: "The Third Book i ever read",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
