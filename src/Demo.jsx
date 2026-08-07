import React from "react";
import useFetchData1 from "./useFetchData1";

const Demo = () => {

  const url = "https://jsonplaceholder.typicode.com/comments";

  const {comments}=useFetchData1(url)

  return <div>
    <h2>Your comments ere:</h2>
  </div>;
};

export default Demo;
