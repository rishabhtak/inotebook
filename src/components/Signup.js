import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [credentials, setcredentials] = useState({ email: "", password: "", confirmPassword: "", name: "" })
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // api to login
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password, name: credentials.name })

    });
    const json = await response.json();
    
    if (json.success) {
      localStorage.setItem('token', json.authToken);
      navigate("/");
    }
    else {
      alert('invaild credential');
    }
  }

  const onChangeHandler = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value })
  }


  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Email address</label>
          <input type="text" className="form-control" id="name" name="name" value={credentials.name} onChange={onChangeHandler} required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" name="email" value={credentials.email} onChange={onChangeHandler} aria-describedby="emailHelp" required />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" name="password" value={credentials.password} onChange={onChangeHandler} minLength={5} required />
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
          <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" value={credentials.confirmPassword} onChange={onChangeHandler} minLength={5} required />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Signup