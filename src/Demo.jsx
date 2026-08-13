import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Demo = () => {

  const [allComments, setAllComments] = useState([]);
  const [isLoading,setIsLoading]=useState(true)
  const [error,setError]=useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try{

        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/comments",
        );
        if(!response.ok){
          throw new Error("something went wrong...")
        }
        
        setAllComments(response.data);
      }catch(err){
        setError(err)
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Comments</h1>

{isLoading && <h2>Loading...</h2>}

      <ul>

      {allComments.map((comment) => {
          return <li key={comment.id}>{comment.name}</li>;
        })}
      </ul>
    </div>
  )
}

export default Demo
