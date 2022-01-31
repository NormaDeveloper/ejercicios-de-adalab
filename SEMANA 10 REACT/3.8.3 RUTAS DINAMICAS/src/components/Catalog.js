import { Link, Route, Switch } from 'react-router-dom';
import ProductDetail from './ProductDetail';
function Catalog(props) {
  const renderProduct = props.products.map((product, index) => {
    return (
      <article key={index}>
        <img src={product.url} alt="" />
        <h3>{product.name}</h3>
        <Link to={`/product-detail/${index}`}>Ver detalle del producto</Link>
        <p>{product.price} €</p>
      </article>
    );
  });

  return (
    <div>
      <Switch>
        <Route exact path="/">
          {renderProduct}
        </Route>
        <Route path="/product-detail/:productId">
          <ProductDetail products={props.products} />
        </Route>
      </Switch>
    </div>
  );
}

export default Catalog;
