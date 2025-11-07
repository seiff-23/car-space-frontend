// StatSection.jsx
const stats = [
  { id: 1, name: "Transactions every 24 hours", value: "44 million" },
  { id: 2, name: "Assets under holding", value: "$119 trillion" },
  { id: 3, name: "New users annually", value: "46,000" },
];

export default function StatSection() {
  return (
    <div className="bg-white dark:bg-gray-900 py-24 sm:py-32 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 text-center lg:grid-cols-3">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className="mx-auto flex max-w-xs flex-col gap-y-6 p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 transform group"
            >
              <dt className="text-lg/7 font-semibold text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                {stat.name}
              </dt>
              <dd className="order-first text-4xl font-bold tracking-tight text-transparent bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text sm:text-6xl group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </dd>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
