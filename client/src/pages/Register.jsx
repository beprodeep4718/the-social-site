import { useState } from "react";

const Register = () => {
  const [userdata, setUserdata] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserdata(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/user/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(userdata),
      });
      const data = await response.json();
      alert(data.msg);
      setUserdata({ username: "", password: "" });
    } catch (error) {
      alert("Registration failed. Please try again.", error.message);
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
