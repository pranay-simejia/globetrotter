import React from 'react';
import html2canvas from 'html2canvas';

type ChallengeFriendProps = {
  username: string | null;
  score: { correct: number; incorrect: number };
};

const ChallengeFriend: React.FC<ChallengeFriendProps> = ({ username, score }) => {

  const handleChallengeFriend = async () => {
    if (!username) {
      alert('Please log in to challenge a friend!');
      return;
    }

    const shareableLink = `${window.location.origin}/play?inviter=${username}&score=${score.correct}`;

    const whatsappMessage = `🌍 Globetrotter Challenge!\n\n${username} scored ${score.correct} points! Can you beat them?\n\nPlay now: ${shareableLink}`;
    const whatsappLink = `https://wa.me/?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappLink, '_blank');
  };

  return (
    <button
      onClick={handleChallengeFriend}
      className="px-6 py-3 bg-blue-500 text-white rounded-xl shadow-lg hover:bg-blue-600 transition-all duration-300"
    >
      Challenge a Friend
    </button>
  );
};

export default ChallengeFriend;