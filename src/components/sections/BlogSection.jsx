// BlogSection.jsx
const posts = [
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 2,
    title: "How to use search engine optimization to drive sales",
    href: "#",
    description:
      "Optio cum necessitatibus dolor voluptatum provident commodi et. Qui aperiam fugiat nemo cumque.",
    date: "Mar 10, 2020",
    datetime: "2020-03-10",
    category: { title: "Sales", href: "#" },
    author: {
      name: "Lindsay Walton",
      role: "Front-end Developer",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 3,
    title: "Improve your customer experience",
    href: "#",
    description:
      "Cupiditate maiores ullam eveniet adipisci in doloribus nulla minus. Voluptas iusto libero adipisci rem et corporis. Nostrud sint anim sunt aliqua. Nulla eu labore irure incididunt velit cillum quis magna dolore.",
    date: "Feb 12, 2020",
    datetime: "2020-02-12",
    category: { title: "Business", href: "#" },
    author: {
      name: "Tom Cook",
      role: "Director of Product",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];

export default function BlogSection() {
  return (
    <div className="bg-white dark:bg-gray-900 py-24 sm:py-32 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-pretty text-gray-900 dark:text-white sm:text-5xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            From the blog
          </h2>
          <p className="mt-4 text-xl/8 text-gray-600 dark:text-gray-300">
            Learn how to grow your business with our expert advice.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:gap-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex flex-col items-start justify-between bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <time
                  dateTime={post.datetime}
                  className="text-gray-500 dark:text-gray-400"
                >
                  {post.date}
                </time>
                <a
                  href={post.category.href}
                  className="relative z-10 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900 dark:to-blue-900 px-3 py-1.5 font-medium text-purple-600 dark:text-purple-300 hover:shadow-lg transition-shadow"
                >
                  {post.category.title}
                </a>
              </div>
              <div className="group relative grow">
                <h3 className="mt-4 text-xl/7 font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-4 line-clamp-3 text-base/7 text-gray-600 dark:text-gray-300">
                  {post.description}
                </p>
              </div>
              <div className="relative mt-6 flex items-center gap-x-4 w-full pt-4 border-t border-gray-200 dark:border-gray-700">
                <img
                  alt=""
                  src={post.author.imageUrl}
                  className="size-12 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 p-0.5"
                />
                <div className="text-sm/6">
                  <p className="font-semibold text-gray-900 dark:text-white">
                    <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {post.author.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
