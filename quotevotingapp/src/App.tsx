import { useState } from "react";
import QuoteCard from "./components/QuoteCard";
import { quotes } from "./data/quotes";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [votes, setVotes] = useState<number[]>(
    new Array(quotes.length).fill(0)
  );

  const handleUpvote = () => {
    const newVotes = [...votes];
    newVotes[currentIndex]++;
    setVotes(newVotes);
  };

  const handleDownvote = () => {
    const newVotes = [...votes];
    newVotes[currentIndex]--;
    setVotes(newVotes);
  };

  const nextQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentIndex(randomIndex);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-4">
      <QuoteCard
        quote={quotes[currentIndex].text}
        votes={votes[currentIndex]}
        onUpvote={handleUpvote}
        onDownvote={handleDownvote}
      />
      <button
        onClick={nextQuote}
        className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700"
      >
        Next Quote
      </button>
    </div>
  );
}

export default App;
