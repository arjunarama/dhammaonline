import TeachingsList from "@/components/TeachingsList";

type Teaching = {
  id: number;
  title: string;
  category: string;
  slug: string;
  thumbnail_image_url?: string;
};

async function getTeachings(): Promise<Teaching[]> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/teachings`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to load teachings");
  }

  return response.json();
}

export default async function TeachingsPage() {
  const teachings = await getTeachings();

  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-yellow-400 mb-6">
          Teachings
        </h1>

        <p className="text-stone-400 text-lg mb-10">
          Explore Buddhist teachings from the Dhamma Online library.
        </p>

        <TeachingsList teachings={teachings} />
      </div>
    </main>
  );
}
