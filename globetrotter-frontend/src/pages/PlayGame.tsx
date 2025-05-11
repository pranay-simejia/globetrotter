import { useEffect, useState } from 'react';
import axios from 'axios';
import Confetti from 'react-confetti';
import { motion } from 'framer-motion';
import ChallengeFriend from '../components/ChallengeFriend';
import styles from './PlayGame.module.css';
import backgroundImage from '../assets/login-bg.jpg';
type Destination = {
  id: number;
  clues: string[];
  options: string[];
  funFacts: string[];
};

const PlayGame = () => {
  const [destination, setDestination] = useState<Destination | null>(null);
  const [selected, setSelected] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState<{ correct: number; incorrect: number }>({ correct: 0, incorrect: 0 });
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    setUsername(storedUsername);
    loadNewDestination();
    if (storedUsername) fetchScore(storedUsername);
  }, []);

  const loadNewDestination = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/destinations/random`);
      setDestination(response.data);
      resetGameState();
    } catch (error) {
      console.error('Error fetching random destination:', error);
    }
  };

  const fetchScore = async (username: string) => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/users/${username}/score`);
      const { correctScore = 0, incorrectScore = 0 } = response.data;
      setScore({ correct: correctScore, incorrect: incorrectScore });
    } catch (error) {
      console.error('Error fetching score:', error);
    }
  };

  const updateScoreBackend = async (updatedScore: { correct: number; incorrect: number }) => {
    if (!username) return;
    try {
      let score = { correctScore: updatedScore.correct, incorrectScore: updatedScore.incorrect };
      await axios.patch(`${import.meta.env.VITE_BACKEND_URL}/users/${username}/score`, score);
    } catch (error) {
      console.error('Error updating score:', error);
    }
  };

  const handleGuess = async (guess: string) => {
    if (!destination) return;
    
    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/destinations/validate`, {
        destinationId: destination.id,
        selectedAnswer: guess,
      });

      const { isCorrect, funFacts } = response.data;
      setDestination((prev) => (prev ? { ...prev, funFacts } : null));
      setSelected(guess);
      setIsCorrect(isCorrect);

      const updatedScore = {
        correct: score.correct + (isCorrect ? 1 : 0),
        incorrect: score.incorrect + (!isCorrect ? 1 : 0),
      };

      setScore(updatedScore);
      await updateScoreBackend(updatedScore);

    } catch (error) {
      console.error('Error validating answer:', error);
    }
  };

  const resetGameState = () => {
    setSelected(null);
    setIsCorrect(null);
  };

  if (!destination) {
    return (
      <div className={styles.loadingContainer}>
        Loading...
      </div>
    );
  }

   return (
    <div className={styles.container} style={{ backgroundImage: `url(${backgroundImage})` }}>
      {isCorrect && <Confetti />}
      <div className={styles.overlay}></div>

      <div className={styles.challengeFriend}>
        <ChallengeFriend username={username} score={score} />
      </div>

      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1>🌍 Globetrotter Challenge</h1>
          {username && <h2>Welcome, {username}!</h2>}
          <p>Test your knowledge of famous destinations!</p>
        </div>
        <button onClick={() => {
          localStorage.removeItem('username');
          setUsername(null);
          window.location.href = '/';
        }} className={styles.logoutButton}>
          Logout
        </button>
      </header>

      <main className={styles.mainContent}>
        <div className={styles.scoreCard}>
          <p className={styles.scoreTitle}>Score</p>
          <p className={styles.correctScore}>✅ Correct: {score.correct}</p>
          <p className={styles.incorrectScore}>❌ Incorrect: {score.incorrect}</p>
        </div>

        <div className={styles.gameCard}>
          <h2>Guess the Destination!</h2>

          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={styles.clue}
          >
            🧭 Clue: {destination.clues[0]}
          </motion.p>

          <div className={styles.options}>
            {destination.options.map((opt) => (
              <motion.button
                key={opt}
                onClick={() => handleGuess(opt)}
                whileTap={{ scale: 0.97 }}
                whileHover={{ scale: 1.02 }}
                className={`${styles.option} ${
                  selected === opt
                    ? isCorrect
                      ? styles.correct
                      : styles.incorrect
                    : ''
                }`}
                disabled={!!selected}
              >
                {opt}
              </motion.button>
            ))}
          </div>

          {selected && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className={styles.result}
            >
              <div className={isCorrect ? styles.correctResult : styles.incorrectResult}>
                {isCorrect ? '🎉 Correct!' : '😢 Nope!'}
                <span className={styles.funFact}>
                  Fun fact: {destination.funFacts[0]}
                </span>
              </div>

              <div className={styles.actionButtons}>
                {!isCorrect && (
                  <button
                    onClick={() => setSelected(null)}
                    className={styles.retryButton}
                  >
                    Retry
                  </button>
                )}
                <button
                  onClick={loadNewDestination}
                  className={styles.nextButton}
                >
                  Next Question
                </button>
                <button
                  onClick={async () => {
                    setScore({ correct: 0, incorrect: 0 });
                    if (username) {
                      try {
                        await axios.patch(`${import.meta.env.VITE_BACKEND_URL}/users/${username}/score`, {
                          correctScore: 0,
                          incorrectScore: 0,
                        });
                      } catch (error) {
                        console.error('Error resetting score on backend:', error);
                      }
                    }
                    loadNewDestination();
                  }}
                  className={styles.resetButton}
                >
                  Reset Game
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </main>

      <footer className={styles.footer}>
        <p>© 2025 Globetrotter Challenge. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PlayGame;