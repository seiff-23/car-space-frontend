// CTASection.jsx
export default function CTASection() {
  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0 transform transition-all duration-500 hover:scale-[1.02]">
          <div className="absolute inset-0 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.white),theme(colors.transparent))] opacity-20" />
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-4xl font-bold tracking-tight text-balance text-white sm:text-5xl drop-shadow-lg">
              Boost your productivity.
              <span className="block mt-2 bg-gradient-to-r from-amber-200 to-yellow-400 bg-clip-text text-transparent">
                Start using our app today.
              </span>
            </h2>
            <p className="mt-6 text-xl/8 text-pretty text-blue-100">
              Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
              Malesuada adipiscing sagittis vel nulla.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                href="#"
                className="rounded-full bg-white px-8 py-4 text-lg font-bold text-gray-900 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 hover:bg-gray-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get started free
              </a>
              <a
                href="#"
                className="text-lg/6 font-semibold text-white hover:text-gray-200 group transition-all duration-300"
              >
                Watch demo
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
            </div>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8 lg:h-96">
            <img
              alt="App screenshot"
              src="https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
              className="absolute top-0 left-0 w-full max-w-none rounded-2xl bg-white/5 ring-1 ring-white/10 shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
