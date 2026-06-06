import { useState } from "react";
import useFetchComments from "./useFetchComments";

const Page_size = 10;
const Demo = () => {
  const [page, setPage] = useState(0);

  const { comments: allComments } = useFetchComments(
    "https://jsonplaceholder.typicode.com/comments",
  );

  return (
    <div>
      <h2>Comments</h2>
      <div>
        <ol start={page * Page_size + 1}>
          {allComments.map((comment) => {
            return <li key={comment.id}>{comment.name}</li>;
          })}
        </ol>
      </div>
    </div>
  );
};

export default Demo;
