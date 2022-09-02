import "./product.css";
import useFetch from "../../utils/hooks";
import {Link} from 'react-router-dom';

export default function Product() {

  const { productData, loading, error } = useFetch(
    "http://localhost:5000/api/products"
  );

  return (
    <section className="products">
      {loading && <h1>Loading...</h1>}

      {error && <h1>Some error occured!</h1>}

      {!loading &&
        !error &&
        productData.map((product) => {
          return (
            <div className="product-card">
              <Link to={`/products/${product._id}`}>
                <div className="product-image">
                  <img src={product.image} />
                </div>
                <div className="product-info">
                  <h5>{product.title}</h5>
                  <h6>${product.price}</h6>
                </div>
              </Link>
            </div>
          );
        })}
    </section>
  );
}
