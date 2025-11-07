// Hero.jsx
export default function Hero() {
  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="relative isolate px-6 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-purple-600 to-blue-600 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 lg:h-screen lg:py-48">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-4 py-2 text-sm/6 text-gray-600 dark:text-gray-300 ring-1 ring-gray-900/10 dark:ring-gray-100/10 hover:ring-gray-900/20 dark:hover:ring-gray-100/20 transition-all duration-300 hover:shadow-lg backdrop-blur-sm bg-white/50 dark:bg-gray-800/50">
              Announcing our next round of funding.{" "}
              <a
                href="#"
                className="font-semibold text-purple-600 dark:text-purple-400"
              >
                <span aria-hidden="true" className="absolute inset-0" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-5xl font-bold tracking-tight text-balance text-gray-900 dark:text-white sm:text-7xl">
              Data to enrich your{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                online business
              </span>
            </h1>
            <p className="mt-8 text-xl font-medium text-pretty text-gray-600 dark:text-gray-300 sm:text-2xl/8">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.
            </p>
            <div className="mt-12 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 hover:from-purple-700 hover:to-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
              >
                Get started
              </a>
              <a
                href="#"
                className="text-lg/6 font-semibold text-gray-900 dark:text-white group transition-all duration-300"
              >
                Learn more
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
