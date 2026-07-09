import React, { useState } from "react";
import useFetchData from "./useFetchData";

let PAGE_SIZE = 10;
const Demo = () => {
  const [page, setPage] = useState(0);
  const url = "https://jsonplaceholder.typicode.com/comments";

  const { allComments } = useFetchData(url);

  let startIndex = page * PAGE_SIZE;

  const currentComments = allComments.slice(startIndex, startIndex + PAGE_SIZE);

  const handlePrevClick = () => {
    if (page > 0) {
      setPage((prev) => prev - 1);
    }
  };

  const handleNextClick = () => {
    if (page + PAGE_SIZE <= allComments.length) {
      setPage((prev) => prev + 1);
    }
  };

  return (
    <div>
      <ol start={page*PAGE_SIZE+1}>
        {currentComments.map((comment) => {
          return <li key={comment.id}>{comment.name}</li>;
        })}
      </ol>

      <button disabled={page === 0} onClick={() => handlePrevClick()}>
        Prev
      </button>
      <button
        disabled={startIndex + PAGE_SIZE >= allComments.length}
        onClick={() => handleNextClick()}
      >
        Next
      </button>
    </div>
  );
};

export default Demo;
