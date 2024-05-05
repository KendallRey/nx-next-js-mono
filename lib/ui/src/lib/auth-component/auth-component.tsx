import { useState } from 'react';
import styles from './auth-component.module.scss';

/* eslint-disable-next-line */
export interface AuthComponentProps {}

export function AuthComponent(props: AuthComponentProps) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic here
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
      <button onClick={handleLogin} id="login-button" className={styles['button']}>Login</button>
    </div>
  );
}

export default AuthComponent;
