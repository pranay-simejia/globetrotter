import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './Login.module.css'; // Import CSS module

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
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to Globetrotter</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Start Game
        </button>
      </form>
    </div>
  );
};

export default Login;