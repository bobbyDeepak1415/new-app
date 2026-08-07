import React, { useEffect, useState } from "react";

const useFetchData1 = (url) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const res = await response.json();
      setComments(res);
    };
    fetchData();
  }, [url]);

  return { comments };
};

export default useFetchData1;
