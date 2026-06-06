import { useState } from "react";
import useFetchComments from "./useFetchComments";

const Page_size = 10;
const Demo = () => {
  const [page, setPage] = useState(0);

  const { comments: allComments } = useFetchComments(
    "https://jsonplaceholder.typicode.com/comments",
  );

  const startIndex = page * Page_size;

  const filteredComments = allComments.slice(
    startIndex,
    startIndex + Page_size,
  );

  const handleBackClick = () => {
    if (page > 0) {
      setPage((page) => page - 1);
    }
  };

  const handleForwrdClick = () => {
    if (startIndex + Page_size <= allComments.length) {
      setPage((page) => page + 1);
    }
  };

  return (
    <div>
      <h2>Comments</h2>
      <div>
        <ol start={page * Page_size + 1}>
          {filteredComments.map((comment) => {
            return <li key={comment.id}>{comment.name}</li>;
          })}
        </ol>
        <button disabled={page === 0} onClick={handleBackClick}>
          back
        </button>
        <button
          disabled={startIndex + Page_size >= allComments.length}
          onClick={handleForwrdClick}
        >
          Forward
        </button>
      </div>
    </div>
  );
};

export default Demo;
