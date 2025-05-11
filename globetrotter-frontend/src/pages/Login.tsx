import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './Login.module.css'; // 👈 import CSS module

const Login = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      try {
        const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/users`, {
          username: username.trim(),
        });

        localStorage.setItem('username', response.data.username);
        navigate('/play');
      } catch (error) {
        console.error('Error creating user:', error);
        alert('Failed to create user. Please try again.');
      }
    } else {
      alert('Please enter a valid username.');
    }
  };

  return (
    <div className={styles['login-container']}>
      <h1 className={styles['login-title']}>
        Welcome to <br />
        <span>Globetrotter</span>
      </h1>

      <form onSubmit={handleSubmit} className={styles['login-form']}>
        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className={styles['login-input']}
        />
        <button type="submit" className={styles['login-button']}>
          Start Game
        </button>
      </form>
    </div>
  );
};

export default Login;
