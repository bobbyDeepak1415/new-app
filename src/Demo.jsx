import React from 'react'
import useFetchData from './useFetchData';


let PAGE_SIZE=10

const Demo = () => {

  const url = "https://jsonplaceholder.typicode.com/comments";

  const {allComments}=useFetchData(url)

  const startIndex=0

  const currentComments=allComments.slice()


  return (
    <div>
      
      <ol>{allComments.map((comment)=>{
        return <li key={comment.id}>{comment.name}</li>
      })}</ol>

    </div>
  )
}

export default Demo
