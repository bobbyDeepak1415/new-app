import React, { useState } from "react";
import useFetchData from "./useFetchData";

let PAGE_SIZE = 10;

const Demo = () => {
  const [page, setPage] = useState(0);

  const url = "https://jsonplaceholder.typicode.com/comments";

  const { allComments } = useFetchData(url);

  const startIndex = page * PAGE_SIZE;

  const currentComments = allComments.slice(startIndex, startIndex + PAGE_SIZE);

  return (
    <div>
      <ol>
        {currentComments.map((comment) => {
          return <li key={comment.id}>{comment.name}</li>;
        })}
      </ol>
    </div>
  );
};

export default Demo;
