import React from "react";

type QuoteCardProps = {
  quote: string;
  votes: number;
  onUpvote: () => void;
  onDownvote: () => void;
};

const QuoteCard: React.FC<QuoteCardProps> = ({
  quote,
  votes,
  onUpvote,
  onDownvote,
}) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md max-w-lg mx-auto text-center">
      <p className="text-xl font-semibold mb-4">“{quote}”</p>
      <div className="flex justify-center gap-4">
        <button
          onClick={onUpvote}
          className="bg-green-500 text-white px-4 py-2 rounded-xl"
        >
          👍
        </button>
        <span className="text-lg font-bold">{votes}</span>
        <button
          onClick={onDownvote}
          className="bg-red-500 text-white px-4 py-2 rounded-xl"
        >
          👎
        </button>
      </div>
    </div>
  );
};

export default QuoteCard;
