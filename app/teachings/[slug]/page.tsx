import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { cache } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Teaching = {
  id: number;
  title: string;
  category: string;
  slug: string;
  short_description: string;
  full_content: string;
  thumbnail_image_url?: string;
  banner_image_url?: string;
  featured_image_url?: string;
};

function getMetaDescription(teaching: Teaching) {
  return (
    teaching.short_description ||
    teaching.full_content.slice(0, 155) ||
    `Read ${teaching.title} on Dhamma Online.`
  );
}

function getTeachingImage(teaching: Teaching) {
  return (
    teaching.featured_image_url ||
    teaching.banner_image_url ||
    teaching.thumbnail_image_url
  );
}

const getTeaching = cache(async function getTeaching(
  slug: string
): Promise<Teaching> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/teachings/${slug}`,
    {
      cache: "no-store",
    }
  );

  if (response.status === 404) {
    notFound();
  }

  if (!response.ok) {
    throw new Error("Failed to load teaching");
  }

  return response.json();
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const teaching = await getTeaching(slug);
  const description = getMetaDescription(teaching);
  const image = getTeachingImage(teaching);
  const url = `/teachings/${teaching.slug}`;

  return {
    title: teaching.title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: teaching.title,
      description,
      url,
      siteName: "Dhamma Online",
      type: "article",
      images: image
        ? [
            {
              url: image,
              alt: teaching.title,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: teaching.title,
      description,
      images: image ? [image] : undefined,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  const { slug } = await params;
  const teaching = await getTeaching(slug);

  return (

  <main className="min-h-screen bg-black text-white">

    {/* Hero Section */}
    <section className="relative h-[500px] overflow-hidden rounded-b-[3rem]">

      {(teaching.banner_image_url ||
        teaching.thumbnail_image_url) && (

        <img
          src={
            teaching.banner_image_url ||
            teaching.thumbnail_image_url
          }
          alt={teaching.title}
          className="absolute inset-0 w-full h-full object-cover"
        />

      )}

      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 max-w-5xl mx-auto h-full px-6 flex flex-col justify-center">

        <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm mb-6">
          {teaching.category}
        </p>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight max-w-4xl">
          {teaching.title}
        </h1>

        <p className="text-stone-300 text-xl leading-9 mt-8 max-w-2xl">
          {teaching.short_description}
        </p>

      </div>

    </section>

    {/* Reading Content */}
      <section className="max-w-3xl mx-auto px-6 py-24">

  <div
    className="
      prose
      prose-invert
      prose-lg
      max-w-none

      prose-headings:text-yellow-400
      prose-headings:font-bold

      prose-p:text-stone-200
      prose-p:leading-9

      prose-strong:text-white

      prose-blockquote:border-yellow-500
      prose-blockquote:text-stone-300

      prose-li:text-stone-200

      prose-hr:border-stone-700
    "
  >

    <ReactMarkdown remarkPlugins={[remarkGfm]}>
      {teaching.full_content}
    </ReactMarkdown>

  </div>

</section>

  </main>

);
}
