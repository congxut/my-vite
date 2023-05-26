const Header = () => {
  return /*html */ `
    
<header
      class="pointer-events-none relative z-50 flex flex-col"
      style="height: var(--header-height); margin-bottom: var(--header-mb)"
    >
      <div
        class="order-last mt-[calc(theme(spacing.16)-theme(spacing.3))]"
      ></div>
      <div
        class="sm:px-8 top-0 order-last -mb-3 pt-3"
        style="position: var(--header-position)"
      >
        <div class="mx-auto max-w-7xl lg:px-8">
          <div class="relative px-4 sm:px-8 lg:px-12">
            <div class="mx-auto max-w-2xl lg:max-w-5xl">
              <div
                class="top-[var(--avatar-top,theme(spacing.3))] w-full"
                style="position: var(--header-inner-position)"
              >
                <div class="relative">
                  <div
                    class="absolute left-0 top-3 origin-left transition-opacity h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10"
                    style="
                      opacity: var(--avatar-border-opacity, 0);
                      transform: var(--avatar-border-transform);
                    "
                  ></div>
                  <a
                    aria-label="Home"
                    class="block h-16 w-16 origin-left pointer-events-auto"
                    style="transform: var(--avatar-image-transform)"
                    href="/"
                    ><img
                      alt=""
                      fetchpriority="high"
                      width="512"
                      height="512"
                      decoding="async"
                      data-nimg="1"
                      class="rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 h-16 w-16"
                      style="color: transparent"
                      sizes="4rem"
                      srcset=""
                      src="https://images.unsplash.com/photo-1680528891514-a046ebfe35e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI1fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                  /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="top-0 z-10 h-16 pt-6"
        style="position: var(--header-position)"
      >
        <div
          class="sm:px-8 top-[var(--header-top,theme(spacing.6))] w-full"
          style="position: var(--header-inner-position)"
        >
          <div class="mx-auto max-w-7xl lg:px-8">
            <div class="relative px-4 sm:px-8 lg:px-12">
              <div class="mx-auto max-w-2xl lg:max-w-5xl">
                <div class="relative flex gap-4">
                  <div class="flex flex-1"></div>
                  <div class="flex flex-1 justify-end md:justify-center">
                    <div
                      class="pointer-events-auto md:hidden"
                      data-headlessui-state=""
                    >
                      <button
                        class="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20"
                        type="button"
                        aria-expanded="false"
                        data-headlessui-state=""
                        id="headlessui-popover-button-:R2qb6:"
                      >
                        Menu<svg
                          viewBox="0 0 8 6"
                          aria-hidden="true"
                          class="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400"
                        >
                          <path
                            d="M1.75 1.75 4 4.25l2.25-2.5"
                            fill="none"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </button>
                    </div>
                    <nav class="pointer-events-auto hidden md:block">
                      <ul
                        class="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10"
                      >
                        <li>
                          <a
                            class="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                            href="/about"
                            >About</a
                          >
                        </li>
                        <li>
                          <a
                            class="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                            href="/articles"
                            >Articles</a
                          >
                        </li>
                        <li>
                          <a
                            class="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                            href="/product"
                            >Projects</a
                          >
                        </li>
                        <li>
                          <a
                            class="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                            href="/post"
                            >Posts</a
                          >
                        </li>
                        <li>
                          <a
                            class="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                            href="/contact"
                            >Contact</a
                          >
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <div class="flex justify-end md:flex-1">
                    <div class="pointer-events-auto">
                      <button
                        type="button"
                        aria-label="Toggle dark mode"
                        class="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          aria-hidden="true"
                          class="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-teal-50 [@media(prefers-color-scheme:dark)]:stroke-teal-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-teal-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-teal-600"
                        >
                          <path
                            d="M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z"
                          ></path>
                          <path
                            d="M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061"
                            fill="none"
                          ></path>
                          </svg>
                          <svg
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          class="hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400 [@media_not_(prefers-color-scheme:dark)]:fill-teal-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-teal-500"
                        >
                          <path
                            d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

`;
};
export default Header;