import useFetchComments from "./useFetchComments";

const Demo = () => {

  const {  comments:allComments } = useFetchComments(
    "https://jsonplaceholder.typicode.com/comments",
  );

  return (
    <div>
      <h2>Comments</h2>
      <div>
        <ul>
          {allComments.map((comment) => {
            return <li key={comment.id}>{comment.name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Demo;
