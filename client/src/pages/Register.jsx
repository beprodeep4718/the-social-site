import { useState } from "react";
import { useAuth } from "../context/authContext";
import { toast } from "react-toastify";

const Register = () => {
  const [userdata, setUserdata] = useState({ username: "", password: "" });
  const {register} = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserdata(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { success, message } = await register(userdata.username, userdata.password);
    if (success) {
      toast.success(message);
      // Clear fields after successful registration
      setUserdata({ username: "", password: "" });
    } else {
      toast.error(message);
    }
    
  };



  return (
    <div className="form_page">
      <form className="form_container container" onSubmit={handleSubmit}>
        <h1 className="lg_heading text_black text-3xl uppercase font-semibold mt-3">
          Register Page
        </h1>

        <div className="form_grp">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            value={userdata.username}
            onChange={handleChange}
            id="username"
            required
            autoComplete="username"
          />
        </div>

        <div className="form_grp">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={userdata.password}
            onChange={handleChange}
            id="password"
            required
            autoComplete="new-password"
          />
        </div>

        <button type="submit" className="form_button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;
