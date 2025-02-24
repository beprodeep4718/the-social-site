import { useState } from "react";
import { useAuth } from "../context/authContext";
import { toast } from "react-toastify";

import Loading from "../components/Loading";

const Profile = () => {
  const { user, server_url } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const handleProfilepic = async (e) => {
    try {
      e.preventDefault();
      setIsLoading(true); // Show loading state
      const formData = new FormData();
      formData.append("image", e.target.files[0]);

      const response = await fetch(`http://${server_url}/profile/upload`, {
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
          <Loading />
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
                  className="update_dp my-2 flex"
                  onSubmit={(e) => e.preventDefault()}
                >                 
                  <h3 className="font-semibold mr-52">Update DP :</h3>
                  <input
                    className="max-w-96 block"
                    type="file"
                    name="image"
                    id="profile-pic"
                    accept="image/*"
                    onChange={handleProfilepic}
                  />
                </form>

                <form action="" className="flex">
                    <div className="update_pass my-2 flex w-4/5 ">
                        <h3 className="font-semibold">Update Pass :</h3>
                            <input type="password" name="new_password" className="mx-auto rounded-full border-2 border-blue-400 focus:bg-blue-200 focus:text-xl" id="" />
                    </div>                    
                    <button className="btn save_changes text-center border-4 border-red-800 text-amber-400 w-1/4 rounded-full hover:bg-black hover:text-white">
                        Save_password
                    </button>                    
                </form>

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
