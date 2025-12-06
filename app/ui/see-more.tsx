'use client';

import { useState } from 'react';

type Props = {
  text: string;
  limit?: number;
};

export default function SeeMore({ text, limit = 500 }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (text.length <= limit) {
    return <p className="text-justify">{text}</p>;
  }

  return (
    <div className="flex flex-col items-start gap-1">
      <p className="text-justify">
        {isExpanded ? text : `${text.substring(0, limit)}...`}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="ml-2 inline-block text-sm font-semibold text-gray-500 hover:text-gray-700"
        >
          {isExpanded ? 'See Less' : 'See More'}
        </button>
      </p>
    </div>
  );
}
