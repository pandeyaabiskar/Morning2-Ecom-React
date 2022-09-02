import axios from "axios";
import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get(url);
        setProductData(data);
        setLoading(false);
      } catch (err) {
        setError(true);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return { productData, loading, error };
}
