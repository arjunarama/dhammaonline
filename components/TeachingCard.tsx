"use client";

import Link from "next/link";

type TeachingCardProps = {
  title: string;
  description: string;
  image?: string;
  slug: string;
};

export default function TeachingCard({
  title,
  description,
  image,
  slug,
}: TeachingCardProps) {
  return (
    <Link
      href={`/teachings/${slug}`}
      className="block h-full border border-stone-800 rounded-2xl p-6 bg-stone-950 hover:border-yellow-500 transition"
    >
      
      {image && (

  <img
    src={image}
    alt={title}
    className="w-full h-56 object-cover rounded-2xl mb-4"
  />

)}

      <h2 className="text-2xl font-semibold mb-4">
        {title}
      </h2>

      <p className="text-stone-300 leading-7 mb-4">
        {description}
      </p>

      <span className="text-yellow-400 font-medium">
        Read More
      </span>
    </Link>
  );
}
