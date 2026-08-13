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
          "https://jsonpl...aceholder.typicode.com/comments",
        );
        
        setAllComments(response.data);
      }catch(err){
        setError(err)
      }finally{
        setIsLoading(false)
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Comments</h1>

{isLoading && <h2>Loading...</h2>}
{error && <h2>"something went wrong"</h2>}

      <ul>

      {allComments.map((comment) => {
          return <li key={comment.id}>{comment.name}</li>;
        })}
      </ul>
    </div>
  )
}

export default Demo
