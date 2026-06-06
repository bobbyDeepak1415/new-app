import axios from "axios";
import React, { useEffect, useState } from "react";

const useFetchComments = (url) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
        try{

            const response = await axios.get(url);
            setComments(response.data.comments);
        }catch(err){
console.log("failded to fetch",err)
        }
    };

    fetchComments();
  }, []);

  return { comments };
};

export default useFetchComments;
