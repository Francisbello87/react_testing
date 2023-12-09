import React, { useState } from "react";

export default function LoginForm() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const isDisabled = () => !username || !password
    const Element = error ? error : success
  const handleLogin = (e) => {
    console.log(username);
    setError('')
    setSuccess('')
    e.preventDefault();
    fetch('/api/auth',{method: 'POST',  
        body: JSON.stringify({
        username,
        password,
    }),}).then((res) => res.json())
        .then(() => {
            setSuccess('Success Logging in')
        })
        .catch((err) => {
            setError('Error Logging in')
        })
  };
  return (
    <form>
      <div>{Element}</div>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        value={username}
        className="text-black"
        onChange={(e) => setUserName(e.target.value)}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={password}
        className="text-black"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin} disabled={isDisabled()}>
        Login
      </button>
    </form>
  );
}
