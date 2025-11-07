// TeamSection.jsx
const people = [
  {
    name: "Leslie Alexander",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Michael Foster",
    role: "Co-Founder / CTO",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Dries Vincent",
    role: "Business Relations",
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Lindsay Walton",
    role: "Front-end Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Courtney Henry",
    role: "Designer",
    imageUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Tom Cook",
    role: "Director of Product",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

export default function TeamSection() {
  return (
    <div className="bg-white dark:bg-gray-900 py-24 sm:py-32 transition-colors duration-300">
      <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-xl">
          <h2 className="text-4xl font-bold tracking-tight text-pretty text-gray-900 dark:text-white sm:text-5xl">
            Meet our
            <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              leadership
            </span>
          </h2>
          <p className="mt-6 text-xl/8 text-gray-600 dark:text-gray-300">
            We're a dynamic group of individuals who are passionate about what
            we do and dedicated to delivering the best results for our clients.
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-8 sm:grid-cols-2 sm:gap-10 xl:col-span-2"
        >
          {people.map((person) => (
            <li key={person.name} className="group">
              <div className="flex items-center gap-6 p-4 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 hover:shadow-lg">
                <div className="relative">
                  <img
                    alt=""
                    src={person.imageUrl}
                    className="size-20 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 p-1 group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </div>
                <div>
                  <h3 className="text-xl/7 font-bold tracking-tight text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {person.name}
                  </h3>
                  <p className="text-base/6 font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    {person.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
