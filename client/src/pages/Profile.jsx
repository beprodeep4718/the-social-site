import { useState } from "react";
import { useAuth } from "../context/authContext";
import { toast } from "react-toastify";

import Loading from "../components/Loading";

const Profile = () => {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const handleProfilepic = async (e) => {
    try {
      e.preventDefault();
      setIsLoading(true); // Show loading state
      const formData = new FormData();
      formData.append("image", e.target.files[0]);

      const response = await fetch("http://172.16.104.10:3000/profile/upload", {
        method: "POST",
        credentials: "include",
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        window.location.reload(); // Reload to show updated profile pic
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Error uploading profile picture");
    } finally {
      setIsLoading(false); // Hide loading state
    }
  };

  return (
    <div className="profile_page">
      {isLoading ? (
        <div>
            <Loading/>
        </div>
      ) : (
        <div className="pp_container py-5">
          <h1 className="text-3xl mt-4 mb-2 font-semibold">
            {user.username}&apos;s Profile
          </h1>
          <div className="section flex rounded-md">
            <div className="photo">
              <img
                src={user.profilePicture.url || "/imgs/user.png"}
                alt="Profile"
              />
            </div>
            <div className="posts item">
              <h2 className="text-xm">Posts</h2>
              <div className="counts">{user.posts.length}</div>
            </div>
            <div className="likes item">
              <h2>Likes</h2>
              <div className="counts">7</div>
            </div>
            <div className="alu item">
              <h2>Alu</h2>
              <div className="counts">7</div>
            </div>
          </div>

          <div className="updates section">
            <div className="pp_container">
              <div className="update_buttons mt-4 py-3 flex flex-col">
                <form
                  className="update_dp my-2 flex justify-start"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <h3 className="font-semibold">Update DP :</h3>
                  <input
                    type="file"
                    name="image"
                    id="profile-pic"
                    accept="image/*"
                    onChange={handleProfilepic}
                  />
                  <button
                    type="submit"
                    className="save_changes px-4 py-2 rounded-lg text-center border-2 border-red-800 text-amber-400"
                  >
                    change dp
                  </button>
                </form>
                <div className="update_pass my-2 flex">
                  <h3 className="font-semibold">Update Pass :</h3>
                  <input type="file" name="" id="" />
                </div>
              </div>
              <div className="btn text-center pb-3">
                <button className="save_changes text-center border-2 border-red-800 text-amber-400">
                  Save_changes
                </button>
              </div>
            </div>
          </div>

          <h2 className="text-2xl mt-4 mb-2 font-semibold">Your Activity</h2>
          <div className="section my-1 py-1 rounded-md">
            <div className="titles flex py-2 font-bold">
              <h2 className="column">POSTS</h2>
              <h2 className="column">TITLE</h2>
              <h2 className="column">Date Created</h2>
            </div>
          </div>

          <div className="post_lists">
            <div className="section my-2 py-2 rounded-md">
              <div className="data flex py-2">
                <h2 className="column">
                  <a href="" className="button">
                    Visit
                  </a>
                </h2>
                <h2 className="column">See what I found</h2>
                <h2 className="column">Dec 12, 2024</h2>
              </div>
            </div>
            <div className="section my-2 py-2 rounded-md">
              <div className="data flex py-2">
                <h2 className="column">
                  <a href="" className="button">
                    Visit_2
                  </a>
                </h2>
                <h2 className="column">Hello Guyz! Chai Pilo...</h2>
                <h2 className="column">Dec 12, 2024</h2>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
