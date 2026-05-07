import { notFound } from "next/navigation";

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

async function getTeaching(slug: string): Promise<Teaching> {
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
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  const { slug } = await params;
  const teaching = await getTeaching(slug);

  return (

    <main className="min-h-screen bg-black text-white px-6 py-16">
      <article className="max-w-4xl mx-auto">
        {teaching.banner_image_url && (
          <img
            src={teaching.banner_image_url}
            alt={teaching.title}
            className="w-full h-72 md:h-96 object-cover rounded-3xl mb-10"
          />
        )}

        {!teaching.banner_image_url && teaching.thumbnail_image_url && (
          <img
            src={teaching.thumbnail_image_url}
            alt={teaching.title}
            className="w-full h-72 md:h-96 object-cover rounded-3xl mb-10"
          />
        )}

        <p className="text-yellow-400 uppercase tracking-widest text-sm mb-4">
          {teaching.category}
        </p>

        <h1 className="text-5xl md:text-6xl font-bold text-yellow-400 mb-8">
          {teaching.title}
        </h1>

        <p className="text-xl text-stone-300 leading-9 mb-10">
          {teaching.short_description}
        </p>

        <div className="text-lg text-stone-200 leading-9 whitespace-pre-line">
          {teaching.full_content}
        </div>
      </article>

    </main>

  );
}
