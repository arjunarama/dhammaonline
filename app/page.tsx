import Link from "next/link";

const featuredTeachings = [
  {
    title: "Four Noble Truths",
    description:
      "The foundation of the Buddha’s teachings on suffering and liberation.",
  },
  {
    title: "Vipassana Meditation",
    description:
      "Developing deep awareness and insight into the nature of reality.",
  },
  {
    title: "Dependent Origination",
    description:
      "Understanding how all phenomena arise through causes and conditions.",
  },
];

export default function Home() {
  return (
    <main className="bg-black text-white">

      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/10 to-transparent" />

        <div className="relative max-w-5xl mx-auto text-center">
          <p className="text-yellow-400 uppercase tracking-[0.3em] mb-6 text-sm">
            Modern Buddhist Learning Platform
          </p>

          <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-8">
            Learn the
            <span className="text-yellow-400"> Dhamma </span>
            Online
          </h1>

          <p className="text-xl text-stone-300 leading-8 max-w-3xl mx-auto mb-10">
            Explore authentic teachings of the Buddha through structured
            learning, meditation guidance, and modern digital experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/teachings"
              className="bg-yellow-500 text-black px-8 py-4 rounded-2xl font-semibold hover:bg-yellow-400 transition"
            >
              Explore Teachings
            </Link>

            <Link
              href="/about"
              className="border border-stone-700 px-8 py-4 rounded-2xl hover:border-yellow-400 transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 py-20 border-y border-stone-900">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-4xl font-bold text-yellow-400 mb-2">4+</h3>
            <p className="text-stone-400">Core Teachings</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-yellow-400 mb-2">100%</h3>
            <p className="text-stone-400">Free Learning</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-yellow-400 mb-2">24/7</h3>
            <p className="text-stone-400">Online Access</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-yellow-400 mb-2">∞</h3>
            <p className="text-stone-400">Wisdom Journey</p>
          </div>
        </div>
      </section>

      {/* Featured Teachings */}
      <section className="px-6 py-28">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-14">
            <div>
              <p className="text-yellow-400 uppercase tracking-widest text-sm mb-3">
                Featured
              </p>

              <h2 className="text-5xl font-bold">
                Core Teachings
              </h2>
            </div>

            <Link
              href="/teachings"
              className="hidden md:block text-yellow-400 hover:text-yellow-300 transition"
            >
              View All →
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredTeachings.map((teaching) => (
              <div
                key={teaching.title}
                className="group border border-stone-800 rounded-3xl p-8 bg-stone-950 hover:border-yellow-500 transition duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-yellow-500/10 flex items-center justify-center mb-6 group-hover:bg-yellow-500/20 transition">
                  <span className="text-yellow-400 text-xl">☸</span>
                </div>

                <h3 className="text-2xl font-semibold mb-4">
                  {teaching.title}
                </h3>

                <p className="text-stone-300 leading-8">
                  {teaching.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="px-6 py-28 bg-stone-950">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-yellow-400 uppercase tracking-widest text-sm mb-4">
            Our Mission
          </p>

          <h2 className="text-5xl font-bold mb-10">
            Bringing Ancient Wisdom
            <br />
            Into The Digital Age
          </h2>

          <p className="text-xl text-stone-300 leading-9">
            Dhamma Online exists to make authentic Buddhist teachings accessible
            globally through modern technology, thoughtful design, and
            structured learning experiences that support reflection and practice.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-32 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-8">
            Begin Your Journey
          </h2>

          <p className="text-xl text-stone-300 leading-8 mb-10">
            Discover teachings, meditation practices, and timeless wisdom for
            deeper understanding and mindful living.
          </p>

          <button className="bg-yellow-500 text-black px-10 py-5 rounded-2xl font-semibold text-lg hover:bg-yellow-400 transition">
            Join the Community
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-stone-900 px-6 py-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-stone-500">
            © 2026 Dhamma Online. All rights reserved.
          </p>

          <div className="flex gap-6 text-stone-400">
            <Link href="/about" className="hover:text-yellow-400 transition">
              About
            </Link>

            <Link href="/teachings" className="hover:text-yellow-400 transition">
              Teachings
            </Link>
          </div>
        </div>
      </footer>

    </main>
  );
}