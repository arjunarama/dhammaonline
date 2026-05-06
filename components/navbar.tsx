import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-stone-800 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <Link href="/" className="text-2xl font-bold text-yellow-400">
          Dhamma Online
        </Link>

        <div className="flex items-center gap-6">
          <Link href="/" className="hover:text-yellow-400 transition">
            Home
          </Link>

          <Link href="/about" className="hover:text-yellow-400 transition">
            About
          </Link>

          <Link href="/teachings" className="hover:text-yellow-400 transition">
            Teachings
          </Link>

          <button className="bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
}
