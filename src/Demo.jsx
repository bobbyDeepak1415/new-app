import React, { useState } from "react";
import useFetchData1 from "./useFetchData1";

let PAGE_SIZE = 20;

const Demo = () => {
  const url = "https://jsonplaceholder.typicode.com/comments";

  const [page, setPage] = useState(0);

  const { comments } = useFetchData1(url);

  let startIndex = PAGE_SIZE * page;

  const currentComments = comments.slice(startIndex, startIndex + PAGE_SIZE);

  const handlePrevClick = () => {
    if (page > 0) {
      setPage((prev) => prev - 1);
    }
  };

  const handleNextClick = () => {
    if (startIndex * PAGE_SIZE < comments.length) {
      setPage((prev) => prev + 1);
    }
  };

  return (
    <div>
      <h2>Your comments ere:</h2>
      <ol start={page * PAGE_SIZE}>
        {currentComments.map((comment) => {
          return <li key={comment.id}>{comment.name}</li>;
        })}
      </ol>
      <button disabled={page === 0} onClick={handlePrevClick}>
        prev
      </button>
      <button
        disabled={startIndex * PAGE_SIZE >= comments.length}
        onClick={handleNextClick}
      >
        Next
      </button>
    </div>
  );
};

export default Demo;
