import React, { useState } from 'react';

const Register = () => {

  const [userdata, setUserdata] = useState({username: "", password: ""});

  const handleChange=(e) => {
    console.log(userdata);
    setUserdata((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      } 
    })
  }
  return (
    <div className="form_page">
      

      <form className="form_container container">
        <h1 className="lg_heading text_black text-3xl uppercase font-semibold mt-3">Register Page</h1>
       
        <div className="form_grp">
          <label htmlFor="username">Username</label>
          <input type="text" name='username' onChange={handleChange} id="username" required />
        </div>
        
        <div className="form_grp">
          <label htmlFor="password">Password</label>
          <input type="text" name='password' onChange={handleChange} id="password" required />
        </div>
        
        <button type="submit" className="form_button">
          <p className=''>SUBMIT</p></button>
      </form>

    </div>
  );
};

export default Register;