import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
    const navigate = useNavigate();   // ✅ ADD THIS
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  console.log(formData);

  // after login success
  navigate("/"); // redirect to landing page
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h2>Login Form</h2>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <div className="options">
            <label>
              <input
                type="checkbox"
                name="remember"
                checked={formData.remember}
                onChange={handleChange}
              />
              Remember me
            </label>

           <Link to="/ForgotPassword" className="forgot">
  Forgot password?
</Link>
          </div>

          <button type="submit">Login</button>

          <p className="signup">
            Not a member? <Link to="/register">Signup now</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;


