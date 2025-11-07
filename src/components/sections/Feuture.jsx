// Feature.jsx
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Push to deploy.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "SSL certificates.",
    description:
      "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
    icon: LockClosedIcon,
  },
  {
    name: "Database backups.",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: ServerIcon,
  },
];

export default function Feature() {
  return (
    <div className="overflow-hidden bg-white dark:bg-gray-900 py-24 sm:py-32 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-16 sm:gap-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-8">
            <div className="lg:max-w-xl">
              <h2 className="text-base/7 font-semibold text-transparent bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text">
                Deploy faster
              </h2>
              <p className="mt-4 text-5xl font-bold tracking-tight text-pretty text-gray-900 dark:text-white sm:text-6xl">
                A better
                <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  workflow
                </span>
              </p>
              <p className="mt-8 text-xl/8 text-gray-700 dark:text-gray-300">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </p>
              <dl className="mt-12 max-w-xl space-y-10 text-base/7 text-gray-600 dark:text-gray-400 lg:max-w-none">
                {features.map((feature) => (
                  <div
                    key={feature.name}
                    className="relative pl-12 group hover:scale-105 transform transition-all duration-300"
                  >
                    <dt className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      <feature.icon
                        aria-hidden="true"
                        className="absolute top-1 left-1 size-8 p-1.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg group-hover:scale-110 transition-transform"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="mt-2 text-base/7">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="flex items-start justify-end lg:order-first">
            <img
              alt="Product screenshot"
              src="https://tailwindcss.com/plus-assets/img/component-images/project-app-screenshot.png"
              className="w-full max-w-none rounded-2xl shadow-2xl ring-1 ring-gray-400/10 sm:w-[57rem] lg:w-[72rem] hover:shadow-3xl transition-all duration-500 hover:scale-105 transform"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
