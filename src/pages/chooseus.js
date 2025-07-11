import React from 'react';

export default function ChooseUs() {
  return (
    <div className="bg-white">
      {/* Header Section */}
      <div className="text-center py-20 sm:py-28 max-md:py-16 max-sm:py-12 px-4">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl max-md:text-3xl max-sm:text-2xl">
          Built for Bloggers, Loved by Readers
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600 max-md:text-base max-sm:text-sm max-sm:mt-4">
          Jaywon's Blogger isn’t just a platform—it’s an experience. Fast, elegant, and secure, designed for storytellers who care about their readers.
        </p>
      </div>

      {/* Why Choose Us */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 pb-20 max-sm:gap-6 max-sm:px-4">
        {[
          {
            title: "Fast Loading",
            desc: "Optimized performance for instant blog access.",
            icon: (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h2l1 2h13l1-2h2M6 10V6a2 2 0 012-2h8a2 2 0 012 2v4" />
            )
          },
          {
            title: "Reader Focused",
            desc: "Minimal distractions, immersive reading.",
            icon: (
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c1.333-2 4-2 5 0s-1 4-2.5 5C12.5 14 12 16 12 16s-.5-2-2.5-3C8 12 6.667 10 7 8s3.667-2 5 0z" />
            )
          },
          {
            title: "Mobile First",
            desc: "Beautiful across all screen sizes.",
            icon: (
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M12 22a10 10 0 100-20 10 10 0 000 20z" />
            )
          },
          {
            title: "Secure & Private",
            desc: "HTTPS, privacy-first tracking and no noise.",
            icon: (
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 8a6 6 0 11-12 0 6 6 0 0112 0zM12 14v7m0 0l3-3m-3 3l-3-3" />
            )
          }
        ].map((item, i) => (
          <div key={i} className="text-center">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-lime-100 max-sm:h-10 max-sm:w-10">
              <svg className="h-6 w-6 text-lime-600 max-sm:h-5 max-sm:w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                {item.icon}
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 max-sm:text-base">{item.title}</h3>
            <p className="mt-1 text-sm text-gray-600 max-sm:text-xs">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Statistics */}
      <div className="bg-lime-50 py-20 sm:py-28 max-md:py-16 max-sm:py-12 px-6 max-sm:px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl max-md:text-2xl max-sm:text-xl">
            Trusted by bloggers across the world
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600 max-md:text-base max-sm:text-sm">
            Our impact speaks volumes
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-md:mt-12 max-sm:mt-8">
          {[
            { label: 'Active Users', value: '20,000+' },
            { label: 'Blog Posts Published', value: '150,000+' },
            { label: 'Countries Reached', value: '60+' },
            { label: 'Years of Uptime', value: '5+' }
          ].map((stat, i) => (
            <div key={i} className="flex flex-col bg-white p-8 rounded-lg shadow-sm max-md:p-6 max-sm:p-4 text-center">
              <dt className="text-sm font-semibold leading-6 text-gray-600 max-sm:text-xs">{stat.label}</dt>
              <dd className="order-first text-3xl font-bold tracking-tight text-gray-900 max-md:text-2xl max-sm:text-xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <div className="text-center py-16 max-sm:py-12 px-6 max-sm:px-4">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl max-md:text-2xl max-sm:text-xl">
          Ready to build your legacy?
        </h2>
        <p className="mt-4 text-lg leading-8 text-gray-600 max-md:text-base max-sm:text-sm">
          Join the Jaywon Blogger community today and give your stories the home they deserve.
        </p>
        <button className="mt-6 px-6 py-3 bg-lime-600 text-white text-sm font-semibold rounded-lg hover:bg-lime-700 transition max-sm:text-xs max-sm:px-4 max-sm:py-2">
          Get Started
        </button>
      </div>
    </div>
  );
}
