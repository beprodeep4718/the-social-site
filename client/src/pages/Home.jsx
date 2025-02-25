import { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../context/authContext";

const Body = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const {server_url} = useAuth()

  // Fetch posts from the backend
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`http://${server_url}/post`);
        const sortedPosts = response.data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        ); // Sort posts by newest first
        setPosts(sortedPosts);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);
  return (
    <div className="bg-black pb-5">
      <div className="container text-red-500 m-auto">
        <h1 className="text-center text-white text-3xl py-5">Posts</h1>

        {loading ? (
          <div className="text-center text-white">Loading posts...</div>
        ) : (
          posts.map((post) => (
            <div key={post._id} className="day_content border-green-500 border-2 my-5">
              <div className="date text-2xl text-right font-bold">
                {new Date(post.createdAt).toLocaleDateString("en-US")}
              </div>

              <div className="posts my-5 text-gray-300 rounded-xl">
                <div className="info flex text-white p-1">
                  <div className="photo w-10 h-10 mx-5 rounded-full border-red-600 border-4 overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src={post.author.profilePicture.url || "/imgs/user.png"}
                      alt={`${post.author.username}'s profile`}
                    />
                  </div>
                  <div className="user my-auto">{post.author.username}</div>
                </div>

                <div className="content my-3">
                  {post.content != "" && <p className="text-white px-4 py-2">{post.content}</p>}
                  {post.image.url != "" && (
                    <img src={post.image.url} alt="Post" className="w-full" />
                  )}
                </div>

                <div className="bottom_text p-1 text-center w-full">
                  <div className="btn">
                    <button className="like_button text-right text-blue-500">Like</button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
