import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function nestComments(commentList) {
  const commentMap = {};

  // move all the comments into a map of id => comment
  commentList.forEach(comment => commentMap[comment.id] = comment);

  // iterate over the comments again and correctly nest the children
  commentList.forEach(comment => {
    if (comment.parentId !== null) {
      const parent = commentMap[comment.parentId];
      (parent.children = parent.children || []).push(comment);
    }
  });

  // filter the list to return a list of correctly nested comments
  return commentList.filter(comment => {
    return comment.parentId === null;
  });
}

function Comment({ comment }) {
  const nestedComments = (comment.children || []).map(comment => {
    return <Comment comment={comment} />;
  });

  console.log("Comments: ", nestedComments)

  return (
    <div key={comment.id}>
      <span>{comment.text}</span>
      {/* <a href={comment.author.url}>{comment.author.name}</a> */}
      {nestedComments}
    </div>
  );
}

function App() {

  const [comments, setComments] = useState([
    {
      id: 1,
      parentId: null,
      text: "1"
    },
    {
      id: 2,
      parentId: 1,
      text: "2"
    },
    {
      id: 3,
      parentId: 1,
      text: "3"
    },
    {
      id: 4,
      parentId: 3,
      text: "4"
    },
    {
      id: 5,
      parentId: 4,
      text: "5"
    },
    {
      id: 6,
      parentId: 3,
      text: "6"
    },
  ])

  return (
    <div className="App">
      <ul>
        {comments.map((comment) => {
          return <Comment key={comment.id} comment={comment} />
        })}
      </ul>
    </div>
  );
}

export default App;
