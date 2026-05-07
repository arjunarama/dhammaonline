"use client";

import { useState } from "react";
import TeachingCard from "@/components/TeachingCard";

type Teaching = {
  id: number;
  title: string;
  category: string;
  slug: string;
  thumbnail_image_url?: string;
};

type TeachingsListProps = {
  teachings: Teaching[];
};

export default function TeachingsList({
  teachings,
}: TeachingsListProps) {
  const [search, setSearch] = useState("");

  const filteredTeachings = teachings.filter((teaching) =>
    teaching.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="mb-12">
        <input
          type="text"
          placeholder="Search teachings..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          className="w-full bg-stone-950 border border-stone-800 rounded-2xl px-5 py-4 text-white outline-none focus:border-yellow-500 transition"
        />
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredTeachings.map((teaching) => (
          <TeachingCard
            key={teaching.id}
            title={teaching.title}
            description={teaching.category}
            image={teaching.thumbnail_image_url}
            slug={teaching.slug}
          />
        ))}
      </div>

      {filteredTeachings.length === 0 && (
        <div className="text-center py-20 text-stone-500 text-xl">
          No teachings found.
        </div>
      )}
    </>
  );
}
