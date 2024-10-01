import { useState } from 'react';
import styles from './auth-component.module.scss';
import { LoginRequestBody } from 'lib/login-api-types/src';

/* eslint-disable-next-line */
export interface AuthComponentProps {}

export function AuthComponent(props: AuthComponentProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const requestBody: LoginRequestBody = {
      username,
      password,
    };
    // call the login api using the inbuilt browser fetch library at http://localhost:3333/api/login with the username and password as the body
    // if the response is 200, then redirect to the home page
    // if the response is 401, then show an error message
    const response = await fetch('http://localhost:3333/api/login', {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.status === 200) {
      window.location.href = '/';
    } else {
      alert('Invalid username or password');
    }
  };
  return (
    <div className={styles['container']}>
      <h1>Login to Y Organization</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        id="username"
        className={styles['input']}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        id="password"
        className={styles['input']}
      />
      <button
        onClick={handleLogin}
        id="login-button"
        className={styles['button']}
      >
        Login
      </button>
    </div>
  );
}

export default AuthComponent;
