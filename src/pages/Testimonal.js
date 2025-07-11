import React from 'react';

const testimonials = [
  {
    name: 'Aisha Bello',
    title: 'Loyal Reader',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    quote:
      'Jaywon’s blogs have brought clarity to things I never knew I needed answers to. Every post feels like a letter from a friend.',
  },
  {
    name: 'Chinedu Okafor',
    title: 'Tech Enthusiast',
    image: 'https://images.unsplash.com/photo-1502767089025-6572583495b0?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    quote:
      'The clarity in each blog is unmatched. It’s not just writing—it’s insight delivered with simplicity and grace.',
  },
  {
    name: 'Fatima Yusuf',
    title: 'Content Creator',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    quote:
      'From trending topics to timeless thoughts, Jaywon’s Blogger is my go-to for inspiration and insight.',
  },
];

export default function TestimonialsBlogger() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 max-sm:py-10 max-md:py-14">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 max-sm:text-2xl max-md:text-3xl">
          Voices from the Community
        </h2>
        <p className="mt-2 text-gray-600 text-lg max-sm:text-sm max-md:text-base">
          Here’s what readers are saying about Jaywon’s words and wisdom.
        </p>
      </div>

      <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-2">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 ease-in-out"
          >
            <div className="flex items-center gap-4">
              <img
                src={t.image}
                alt={t.name}
                className="w-14 h-14 rounded-full object-cover max-sm:w-12 max-sm:h-12"
              />
              <div>
                <h3 className="text-base font-semibold text-gray-900 max-sm:text-sm">
                  {t.name}
                </h3>
                <p className="text-sm text-gray-500 max-sm:text-xs">{t.title}</p>
              </div>
            </div>
            <p className="mt-4 text-gray-700 text-sm leading-relaxed max-sm:text-xs max-md:text-sm">
              “{t.quote}”
            </p>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h3 className="text-xl font-semibold text-gray-900 max-sm:text-base">
          Got something to say?
        </h3>
        <a
          href="/contact"
          className="mt-4 inline-block rounded-lg bg-blue-600 text-white px-6 py-3 text-sm font-medium hover:bg-blue-700 max-sm:px-4 max-sm:py-2 max-sm:text-xs transition"
        >
          Share Your Testimonial
        </a>
      </div>
    </section>
  );
}
