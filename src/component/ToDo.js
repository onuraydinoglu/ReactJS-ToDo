import { useState, useEffect } from "react";
import "./ToDo.css";
import NewTask from "./NewTask";
import Post from "./Post";

function ToDo() {
  const [posts, setPosts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      setIsFetching(true);
      const response = await fetch("http://localhost:8080/posts");
      const resData = await response.json();
      setPosts(resData.posts);
      setIsFetching(false);
    }

    fetchPosts();
  }, []);

  function addPostHandler(postData) {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  return (
    <>
      <NewTask onAddPost={addPostHandler} />
      {!isFetching && posts.length > 0 && (
        <section id="Form-tasks">
          <div>
            <h2 className="Form-header">Task To Do - 5</h2>
            {posts.map((post, index) => (
              <Post key={index} task={post.task} />
            ))}
          </div>
          <div><h2 className="Form-header">done</h2>
            <label className="Form-todo-label"></label>
          </div>
        </section>
      )}
      {!isFetching && posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
      {isFetching && (
        <div style={{ textAlign: "center", color: "white" }}>
          <p>Loading posts...</p>
        </div>
      )}
    </>
  );
}

export default ToDo;
