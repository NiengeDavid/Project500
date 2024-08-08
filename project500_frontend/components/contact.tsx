import React from "react";

const contact = () => {
  return (
    <div>
      <section className="bg-white">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">
            Contact Us
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-lg text-center text-gray-500 md:text-xl">
            Get in touch, leave a message and we&apos;ll get right back to you.
          </p>
          <form action="#" className="space-y-8">
            <div>
              <label className="block mb-2 text-sm text-start font-medium text-gray-900 dark:text-gray-300">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-zinc-500 focus:border-zinc-500 "
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm text-start font-medium text-gray-900">
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-zinc-500 focus:border-zinc-500 block w-full p-2.5 "
                placeholder="name@hello.com"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm text-start font-medium text-gray-900 dark:text-gray-300">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-zinc-500 focus:border-zinc-500 "
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block mb-2 text-sm text-start font-medium text-gray-900 dark:text-gray-400">
                Your message
              </label>
              <textarea
                id="message"
                rows={6}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-zinc-500 focus:border-zinc-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-black sm:w-fit hover:bg-black/80 focus:ring-4 focus:outline-none focus:ring-zinc-300"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default contact;
