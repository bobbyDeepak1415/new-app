import React from "react";
import useFetchData from "./useFetchData";


let PAGE_SIZE=10
const Demo = () => {
  const url = "https://jsonplaceholder.typicode.com/comments";

  const { allComments } = useFetchData(url);

  return (
    <div>
      {allComments.map((comment) => {
        return <li key={comment.id}>{comment.name}</li>;
      })}
    </div>
  );
};

export default Demo;
