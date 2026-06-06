import { useState } from "react";
import useFetchComments from "./useFetchComments";

const Page_size = 10;
const Demo = () => {
  const [page, setPage] = useState(0);

  const { comments: allComments } = useFetchComments(
    "https://jsonplaceholder.typicode.com/comments",
  );

const startIndex=page*Page_size

  const filteredComments=allComments.slice(startIndex,startIndex+Page_size)

  const handleBackClick=()=>{

  }

  const handleForwrdClick=()=>{

  }


  return (
    <div>
      <h2>Comments</h2>
      <div>
        <ol start={page * Page_size + 1}>
          {filteredComments.map((comment) => {
            return <li key={comment.id}>{comment.name}</li>;
          })}
        </ol>
        <button onClick={handleBackClick}>back</button>
        <button onClick={handleForwrdClick}>Forward</button>
      </div>
    </div>
  );
};




export default Demo;
