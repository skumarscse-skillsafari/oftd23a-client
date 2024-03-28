import { useState, useEffect } from "react";
import axios from "axios";
import Post from "./Post";
import { BASE_URL } from "../../api/baseURL";
const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/v1/posts`)
      .then((res) => setPosts(res?.data?.data))
      .catch((error) => alert(error.response.data.message));
  }, [posts]);
  console.log(posts);
  return (
    <div className="container">
      <h2 className="display-3 text-center mt-3">Posts Component</h2>
      <div className="row">
        {posts.map((post) => {
          return <Post key={post._id} post={post} />;
        })}
      </div>
    </div>
  );
};

export default Posts;
