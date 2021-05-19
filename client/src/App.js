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
    return <div style={{ marginLeft: '10rem' }}>
      nested
      <Comment comment={comment} />
      </div>
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
      text: "1-p"
    },
    {
      id: 2,
      parentId: 1,
      text: "2-1"
    },
    {
      id: 3,
      parentId: 1,
      text: "3-1"
    },
    {
      id: 4,
      parentId: 3,
      text: "4-3"
    },
    {
      id: 5,
      parentId: 4,
      text: "5-4"
    },
    {
      id: 7,
      parentId: null,
      text: "7-p"
    },
    {
      id: 6,
      parentId: 3,
      text: "6-3"
    },
    {
      id: 8,
      parentId: 7,
      text: "8-7"
    },
  ])

  const [nested, setNested] = useState(nestComments(comments))

  console.log("Nested", nested)

  return (
    <div>
      <ul>
        {nested.map((comment) => {
          return <Comment key={comment.id} comment={comment} />
        })}
      </ul>
    </div>
  );
}

export default App;
