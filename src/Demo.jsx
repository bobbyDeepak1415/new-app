import React from "react";
import useFetchData1 from "./useFetchData1";

const Demo = () => {

  const url = "https://jsonplaceholder.typicode.com/comments";

  const {comments}=useFetchData1(url)

  return <div>
    <h2>Your comments ere:</h2>
    <ul>
      {comments.map((comment)=>{
        return <li key={comment.id}>{comment.name}</li>
      })}
    </ul>
  </div>;
};

export default Demo;
