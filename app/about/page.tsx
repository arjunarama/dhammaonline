import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Dhamma Online, a platform for accessible Buddhist teachings and structured learning.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Dhamma Online",
    description:
      "Learn about Dhamma Online, a platform for accessible Buddhist teachings and structured learning.",
    url: "/about",
    siteName: "Dhamma Online",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Dhamma Online",
    description:
      "Learn about Dhamma Online, a platform for accessible Buddhist teachings and structured learning.",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-stone-950 text-white px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-8 text-yellow-400">
          About Dhamma Online
        </h1>

        <p className="text-lg text-stone-300 leading-8 mb-6">
          Dhamma Online is a modern platform dedicated to sharing the teachings
          of the Buddha in a simple, accessible, and meaningful way.
        </p>

        <p className="text-lg text-stone-300 leading-8 mb-6">
          The goal of this project is to make authentic Dhamma teachings
          available to people around the world through technology, thoughtful
          design, and structured learning experiences.
        </p>

        <p className="text-lg text-stone-300 leading-8">
          This platform will gradually include teachings, articles, guided
          learning paths, audio resources, and a members area for deeper study
          and practice.
        </p>
      </div>
    </main>
  );
}
