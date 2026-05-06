export default function Home() {
  return (
    <main className="min-h-screen bg-stone-950 text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-5xl font-bold mb-6">
        Dhamma Online
      </h1>

      <p className="text-xl text-stone-300 max-w-2xl text-center">
        A platform dedicated to learning and practicing the teachings of the Buddha.
      </p>

      <button className="mt-8 bg-yellow-500 text-black px-6 py-3 rounded-xl font-semibold hover:bg-yellow-400 transition">
        Begin the Journey
      </button>
    </main>
  );
}