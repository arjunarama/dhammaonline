"use client";

import { useState } from "react";

type TeachingCardProps = {
  title: string;
  description: string;
};

export default function TeachingCard({
  title,
  description,
}: TeachingCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border border-stone-800 rounded-2xl p-6 bg-stone-950 hover:border-yellow-500 transition">
      
      <h2 className="text-2xl font-semibold mb-4">
        {title}
      </h2>

      <p className="text-stone-300 leading-7 mb-4">
        {description}
      </p>

      {expanded && (
        <div className="text-stone-400 leading-7 mb-4">
          <p>
            This teaching is part of the deeper wisdom traditions of Buddhism
            and helps practitioners cultivate mindfulness, wisdom, compassion,
            and liberation from suffering.
          </p>
        </div>
      )}

      <button
        onClick={() => setExpanded(!expanded)}
        className="text-yellow-400 hover:text-yellow-300 transition font-medium"
      >
        {expanded ? "Show Less" : "Read More"}
      </button>
    </div>
  );
}