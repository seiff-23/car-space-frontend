// LogoSection.jsx
export default function LogoSection() {
  return (
    <div className="bg-white dark:bg-gray-900 py-24 sm:py-32 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-xl/8 font-semibold text-gray-900 dark:text-white">
          Trusted by the world's most innovative teams
        </h2>
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-12 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {[
            "https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-gray-900.svg",
            "https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-gray-900.svg",
            "https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-gray-900.svg",
            "https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-gray-900.svg",
            "https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-gray-900.svg",
          ].map((logo, index) => (
            <div
              key={index}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 hover:scale-110 transform"
            >
              <img
                alt="Company logo"
                src={logo}
                width={158}
                height={48}
                className="w-full h-12 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
