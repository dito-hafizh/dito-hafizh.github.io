'use client';

import { useState } from 'react';

type Props = {
  text: string;
  limit?: number;
};

export default function SeeMore({ text, limit = 500 }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (text.length <= limit) {
    return <p className="text-left">{text}</p>;
  }

  return (
    <div className="flex flex-col items-start gap-1">
      <p className="text-left">
        {isExpanded ? text : `${text.substring(0, limit)}...`}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="ml-2 inline-block text-sm font-bold text-accent hover:text-accent-secondary transition-colors"
        >
          {isExpanded ? 'See Less' : 'See More'}
        </button>
      </p>
    </div>
  );
}
