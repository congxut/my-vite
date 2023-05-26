const Footer = () => {
  return /*html */ `
    
<footer class="mt-32">
      <div class="sm:px-8">
        <div class="mx-auto max-w-7xl lg:px-8">
          <div
            class="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40"
          >
            <div class="relative px-4 sm:px-8 lg:px-12">
              <div class="mx-auto max-w-2xl lg:max-w-5xl">
                <div
                  class="flex flex-col items-center justify-between gap-6 sm:flex-row"
                >
                  <div
                    class="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 "
                  >
                    <a
                      class="transition hover:text-teal-500 dark:hover:text-teal-400"
                      href="/about"
                      >About</a
                    ><a
                      class="transition hover:text-teal-500 dark:hover:text-teal-400"
                      href="/projects"
                      >Projects</a
                    ><a
                      class="transition hover:text-teal-500 dark:hover:text-teal-400"
                      href="/speaking"
                      >Speaking</a
                    ><a
                      class="transition hover:text-teal-500 dark:hover:text-teal-400"
                      href="/uses"
                      >Uses</a
                    >
                  </div>
                  <p class="text-sm text-zinc-400 dark:text-zinc-500">
                    ©
                    <!-- -->2023<!-- -->
                    Spencer Sharp. All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>

  `;
};

export default Footer;
