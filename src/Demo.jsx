import React, { useState } from "react";
import useFetchData from "./useFetchData";

let PAGE_SIZE = 10;

const Demo = () => {
  const [page, setPage] = useState(0);

  const url = "https://jsonplaceholder.typicode.com/comments";

  const { allComments } = useFetchData(url);

  const startIndex = page * PAGE_SIZE;

  const currentComments = allComments.slice(startIndex, startIndex + PAGE_SIZE);


  const handleBackClick=()=>{

  }

  return (
    <div>
      <ol>
        {currentComments.map((comment) => {
          return <li key={comment.id}>{comment.name}</li>;
        })}
      </ol>

      <div>
        <button disabled={page === 0} onClick={()=>handleBackClick()}>
          Prev
        </button>
        <button
          disabled={startIndex + PAGE_SIZE >= allComments.length}
          onClick={()=>handleBackClick()}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default Demo;
