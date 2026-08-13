import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Demo = () => {

  const [allComments, setAllComments] = useState([]);
  const [isLoading,setIsLoading]=useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/comments",
      );

      setAllComments(response.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Comments</h1>
      <ul>

      {allComments.map((comment) => {
          return <li key={comment.id}>{comment.name}</li>;
        })}
      </ul>
    </div>
  )
}

export default Demo
