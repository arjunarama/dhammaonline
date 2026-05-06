import TeachingCard from "@/components/TeachingCard";
const teachings = [
  {
    title: "The Four Noble Truths",
    description:
      "Understanding suffering, its cause, its cessation, and the path leading to liberation.",
  },
  {
    title: "The Noble Eightfold Path",
    description:
      "A practical guide to ethical conduct, mental discipline, and wisdom.",
  },
  {
    title: "Mindfulness Meditation",
    description:
      "Learning awareness of body, feelings, mind, and mental phenomena.",
  },
  {
  title: "Vipassana Meditation",
  description:
    "A practice of deep observation and insight into the true nature of reality through mindfulness and awareness.",
},
{
  title: "Dependent Origination",
  description:
    "Understanding how all phenomena arise dependent on causes and conditions, revealing the interconnected nature of existence.",
}
];

export default function TeachingsPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-yellow-400 mb-12">
          Teachings
        </h1>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {teachings.map((teaching) => (
            <TeachingCard
                key={teaching.title}
                title={teaching.title}
                description={teaching.description}
            />
          ))}
        </div>
      </div>
    </main>
  );
}