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

    // checking passwords 
    e.preventDefault();
    if (userdata.password !== userdata.confirm_pass){
      toast.error("Passwords do not match!")
      return
    }

    const { success, message } = await register(userdata.username, userdata.password);
    if (success) {
      toast.success(message);


      // Clear fields after successful registration
      setUserdata({ username: "", password: "", confirm_pass:"" });
      
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
          <label htmlFor="username" className="font-semibold my-auto">Username</label>
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
          <label htmlFor="password" className="font-semibold my-auto">Password</label>
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

        <div className="form_grp">
          <label htmlFor="confirm_pass" className="font-semibold my-auto">Confirm Pass</label>
          <input
            type="password"
            name="confirm_pass"
            value={userdata.confirm_pass}
            onChange={handleChange}
            id="confirm_pass"
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
