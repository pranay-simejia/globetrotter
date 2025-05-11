import { useEffect, useState } from 'react';
import axios from 'axios';
import Confetti from 'react-confetti';
import { motion } from 'framer-motion';

type Destination = {
  city: string;
  country: string;
  clues: string[];
  funFacts: string[];
  trivia: string[];
  options: string[];
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
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/destinations`);
      const destinations = response.data;
      const randomIndex = Math.floor(Math.random() * destinations.length);
      setDestination(destinations[randomIndex]);
      resetGameState();
    } catch (error) {
      console.error('Error fetching destinations:', error);
    }
  };

  const fetchScore = async (username: string) => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/users/${username}/score`);
      const { correctScore = 0, incorrectScore = 0 } = response.data; // Default to 0 if undefined
      setScore({ correct:correctScore, incorrect:incorrectScore });
    } catch (error) {
      console.error('Error fetching score:', error);
    }
  };

  const updateScoreBackend = async (updatedScore: { correct: number; incorrect: number }) => {
    if (!username) return;
    try {
      let score = { correctScore: updatedScore.correct, incorrectScore: updatedScore.incorrect };
      await axios.patch(`${import.meta.env.VITE_BACKEND_URL}/users/${username}/score`,score);
    } catch (error) {
      console.error('Error updating score:', error);
    }
  };

  const handleGuess = async (guess: string) => {
    if (!destination) return;

    const correctAnswer = `${destination.city}, ${destination.country}`;
    const isAnswerCorrect = guess === correctAnswer;

    setSelected(guess);
    setIsCorrect(isAnswerCorrect);

    const updatedScore = {
      correct: score.correct + (isAnswerCorrect ? 1 : 0),
      incorrect: score.incorrect + (!isAnswerCorrect ? 1 : 0),
    };

    setScore(updatedScore);
    console.log('Updated Score:', updatedScore);
    await updateScoreBackend(updatedScore);
  };

  const resetGameState = () => {
    setSelected(null);
    setIsCorrect(null);
  };

  const handleChallengeFriend = () => {
    const shareableLink = `${window.location.origin}/play?challenge=true`;
    navigator.clipboard.writeText(shareableLink);
    alert('Challenge link copied to clipboard! Share it with your friend.');
  };

  if (!destination)
    return (
      <div className="flex items-center justify-center h-screen text-xl font-semibold text-gray-700 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
        Loading...
      </div>
    );

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 text-gray-800">
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <img
          src="/assets/world-map.svg"
          alt="world map"
          className="absolute top-10 left-1/2 w-[900px] -translate-x-1/2"
        />
        <img
          src="/assets/paper-plane.svg"
          alt="plane"
          className="absolute bottom-0 right-0 w-60 animate-float"
        />
      </div>

      <header className="bg-gradient-to-r from-purple-800 to-indigo-800 text-white py-6 shadow-xl relative z-10">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-extrabold tracking-wide drop-shadow-md">
            🌍 Globetrotter Challenge
          </h1>
          {username && <p className="text-lg mt-2 text-gray-200">Welcome, {username}!</p>}
          <p className="text-lg mt-2 text-gray-200">
            Test your knowledge of famous destinations!
          </p>
        </div>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center p-6 relative z-10">
        {isCorrect && <Confetti />}

        <div className="absolute top-6 right-6 bg-white/80 backdrop-blur-md rounded-xl px-6 py-4 shadow-lg border border-purple-200">
          <p className="text-lg font-bold text-purple-800">Score</p>
          <p className="text-green-600 font-semibold">✅ Correct: {score.correct}</p>
          <p className="text-red-500 font-semibold">❌ Incorrect: {score.incorrect}</p>
        </div>

        <div className="bg-white/80 backdrop-blur-md rounded-3xl p-10 max-w-xl w-full shadow-2xl border border-purple-300">
          <h2 className="text-3xl font-extrabold text-center text-purple-800 mb-6">Guess the Destination!</h2>

          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-lg italic text-center text-purple-700 bg-purple-100 rounded-xl px-4 py-2 shadow-inner mb-8"
          >
            🧭 Clue: {destination.clues[0]}
          </motion.p>

          <div className="space-y-4 mb-6">
            {destination.options.map((opt) => (
              <motion.button
                key={opt}
                onClick={() => handleGuess(opt)}
                whileTap={{ scale: 0.97 }}
                whileHover={{ scale: 1.02 }}
                className={`block w-full p-4 rounded-xl text-lg font-semibold border-2 transition-all duration-300 shadow-sm
                  ${
                    selected === opt
                      ? isCorrect
                        ? 'bg-green-100 border-green-500 text-green-800'
                        : 'bg-red-100 border-red-500 text-red-800'
                      : 'bg-white border-gray-300 hover:bg-purple-50 hover:border-purple-300'
                  }
                `}
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
              className="text-center"
            >
              <div
                className={`text-xl font-semibold ${
                  isCorrect ? 'text-green-700' : 'text-red-700 animate-bounce'
                }`}
              >
                {isCorrect ? '🎉 Correct!' : '😢 Nope!'}
                <span className="block mt-2 text-base">Fun fact: {destination.funFacts[0]}</span>
              </div>

              <div className="flex justify-center gap-6 mt-8">
                {!isCorrect && (
                  <button
                    onClick={() => setSelected(null)}
                    className="px-6 py-3 bg-yellow-500 text-white rounded-xl shadow-lg hover:bg-yellow-600 transition-all duration-300"
                  >
                    Retry
                  </button>
                )}
                <button
                  onClick={loadNewDestination}
                  className="px-6 py-3 bg-purple-600 text-white rounded-xl shadow-lg hover:bg-purple-700 transition-all duration-300"
                >
                  Next Question
                </button>
                <button
                  onClick={() => {
                    setScore({ correct: 0, incorrect: 0 });
                    loadNewDestination();
                  }}
                  className="px-6 py-3 bg-red-500 text-white rounded-xl shadow-lg hover:bg-red-600 transition-all duration-300"
                >
                  Reset Game
                </button>
                <button
                  onClick={handleChallengeFriend}
                  className="px-6 py-3 bg-blue-500 text-white rounded-xl shadow-lg hover:bg-blue-600 transition-all duration-300"
                >
                  Challenge a Friend
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </main>

      <footer className="bg-gradient-to-r from-purple-800 to-indigo-800 text-white py-4 shadow-inner relative z-10">
        <div className="container mx-auto text-center">
          <p className="text-sm">© 2025 Globetrotter Challenge. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default PlayGame;
