import React from 'react';
const { useState, useEffect } = React;

const usePosts = () => {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`, {
      "mode": "cors",
      "credentials": "omit"
    }).then(res => res.json())
    .then(data => setPosts(data))

  }, []);

  return posts;
};

export default usePosts;

// import usePosts from "../hooks/usePosts";

// const App = () => {
//   // Add in code here to use the 'usePosts' hook.
//   const posts = usePosts();

//   const renderedPosts = posts.map((post) => {
//       return <li key={post.id}>{post.title}</li>;
//   });
  
//   return (
//       <div>
//           <h3>Posts</h3>
//           <ul>{renderedPosts}</ul>
//       </div>
//   );
// };