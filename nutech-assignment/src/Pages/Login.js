import './Pages CSS/login.css';
import { useState } from 'react';
import { Navigate } from 'react-router';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setredirect] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('https://take-home-test-api.nutech-integrasi.com/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        })
        .then(async response => {
            if (response.status === 200) {
                const data = await response.json();
                localStorage.setItem('token', data.token);
                console.log('Login successful, data:', data);
                setredirect(true);
            } 
            else if (response.status === 401) {
                alert('Username atau password salah');
            } 
            else if (response.status === 400) {
                alert('Parameter email tidak sesuai');
            }
        });
    };

    if (redirect) {
        return <Navigate to="/" />;
    }

  return (
    <div className="login-page">
      <h1>Login Page</h1>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <h2>Register</h2>
      <p>Don't have an account? <a href="/register">Register here</a>.</p>
      <h2>Forgot Password</h2>
    </div>
  );
}
export default Login;