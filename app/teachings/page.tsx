"use client";

import { useEffect, useState } from "react";
import TeachingCard from "@/components/TeachingCard";

type Teaching = {
  id: number;
  title: string;
  category: string;
};

export default function TeachingsPage() {
  const [teachings, setTeachings] = useState<Teaching[]>([]);

  const [search, setSearch] = useState("");

  async function fetchTeachings() {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/teachings`
    );

    const data = await response.json();

    setTeachings(data);
  }

  useEffect(() => {
    fetchTeachings();
  }, []);

  const filteredTeachings = teachings.filter((teaching) =>
    teaching.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-bold text-yellow-400 mb-6">
          Teachings
        </h1>

        <p className="text-stone-400 text-lg mb-10">
          Explore Buddhist teachings from the Dhamma Online library.
        </p>

        {/* Search */}
        <div className="mb-12">
          <input
            type="text"
            placeholder="Search teachings..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-stone-950 border border-stone-800 rounded-2xl px-5 py-4 text-white outline-none focus:border-yellow-500 transition"
          />
        </div>

        {/* Teachings Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredTeachings.map((teaching) => (
            <TeachingCard
              key={teaching.id}
              title={teaching.title}
              description={teaching.category}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredTeachings.length === 0 && (
          <div className="text-center py-20 text-stone-500 text-xl">
            No teachings found.
          </div>
        )}

      </div>
    </main>
  );
}