import { useState } from "react";
import "./Login.css";
const demo_email = "company@gmail.com";
const demo_password = "password";

const Login = () => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailId.trim() || !password.trim()) {
      alert("Please enter email and password");
      return;
    }
    if (emailId === demo_email && password === demo_password) {
      setMessage("Login Succesfull");
    } else {
      setMessage("Login failed");
    }
  };
  return (
    <div className="main-component">
      <div className="header">Food Source app</div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={emailId}
          onChange={(e) => setEmailId(e.target.value)}
          className="input"
          required
        ></input>
        <input
          type="password"
          placeholder="*******"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input"
          required
        ></input>
        <button type="submit" className="button">
          Submit
        </button>
        {message && <p className="message">{message}</p>}
      </form>
    </div>
  );
};

export default Login;
