import axios from "axios";
import React, { useEffect, useState } from "react";

const useFetchComments = (url) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(url);

        setComments(response.data);
      } catch (err) {
        console.log("failde to fetch", err);
      }
    };
    fetchProducts();

    return () => setComments([]);
  }, [url]);

  return { comments };
};

export default useFetchComments;
