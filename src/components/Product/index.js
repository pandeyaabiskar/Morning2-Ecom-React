import "./product.css";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Product() {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get("http://localhost:5000/api/products");
      setProductData(data);
    }

    fetchData();
  }, []);

  return (
    <section className="products">
      {productData.map((product) => {
        return (
          <div className="product-card">
            <a href={`/products/${product._id}`}>
              <div className="product-image">
                <img src={product.image} />
              </div>
              <div className="product-info">
                <h5>{product.title}</h5>
                <h6>${product.price}</h6>
              </div>
            </a>
          </div>
        );
      })}
    </section>
  );
}
