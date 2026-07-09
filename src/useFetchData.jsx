import React, { useEffect, useState } from "react";

const useFetchData = (url) => {
  const [allComments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await fetch(url);
        const response = await res.json();
        setComments(response);
      } catch (err) {
        console.log("failed to fecth...", err);
      }
    };

    fetchComments();
  }, [url]);

  return { allComments };
};

export default useFetchData;
