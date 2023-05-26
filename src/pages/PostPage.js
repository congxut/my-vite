import Footer from "../components/Footer";
import Header from "../components/Header";
import { posts } from "../dataFake";

const PostPage = () => {
  return /*html */ `
    ${Header()}

    <h2>Posts</h2>
    <div
      class="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-6 gap-8"
    >
        ${posts
          .map(function (post) {
            return /*html */ `

        <div
          class="flex w-full items-center flex justify-center items-center py-12 px-6"
        >
          <div>
            <div
              class="max-w-xs h-64 flex flex-col justify-between bg-white dark:bg-gray-800 rounded-lg border border-gray-400 mb-6 py-5 px-4"
            >
              <div>
                <h4
                  tabindex="0"
                  class="focus:outline-none text-gray-800 dark:text-gray-100 font-bold mb-3"
                >
                  ${post.title}
                </h4>
                <p
                  tabindex="0"
                  class="focus:outline-none text-gray-800 dark:text-gray-100 text-sm"
                >
                  ${post.content}
                </p>
              </div>
              <div>
                <div class="flex items-center justify-between text-gray-800">
                  <p
                    tabindex="0"
                    class="focus:outline-none text-sm dark:text-gray-100"
                  >
                    March 28, 2020
                  </p>
                  <div
                    class="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center"
                  >
                    <img
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/single_card_with_title_and_description-svg1.svg"
                      alt="icon"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        `;
          })
          .join("")}
    </div>

    ${Footer()}
  `;
};

export default PostPage;
