'use client';
import React from 'react';

const Blogs = [
  {
    source: { id: 'the-wall-street-journal', name: 'The Wall Street Journal' },
    author: 'John Gruber',
    title: 'Joanna Stern With Craig Federighi and Greg Joswiak: ‘ Apple Executives Defend Apple Intelligence, Siri and AI Strategy’',
    description: null,
    url: 'https://www.wsj.com/video/series/joanna-stern-personal-technology/apple-executives-defend-apple-intelligence-siri-and-ai-strategy/A7F62EE4-E4F5-4E5D-969A-22644536A47B',
    urlToImage: null,
    publishedAt: '2025-06-10T22:10:26Z',
    content: 'Apple’s AI rollout has been rocky, from Siri delays to underwhelming Apple Intelligence features...',
  },
  {
    source: { id: null, name: "Investor's Business Daily" },
    author: "RYAN DEFFENBAUGH, Investor's Business Daily",
    title: 'Oracle Stock Jumps As CEO Touts New Cloud Deals, Analyst Upgrades To Buy - Investor\'s Business Daily',
    description: 'Oracle stock jumped after CEO Safra Catz said the tech giant landed several large cloud services agreements.',
    url: 'https://www.investors.com/news/technology/oracle-stock-cloud-ai-stifel-upgrade/',
    urlToImage: 'https://www.investors.com/wp-content/uploads/2017/12/stock-Oracle-01-company.jpg',
    publishedAt: '2025-06-30T14:17:00Z',
    content: 'Oracle stock jumped early Monday after its chief executive touted the tech giant\'s recent success...',
  },
  {
    source: { id: null, name: 'Biztoc.com' },
    author: 'finance.yahoo.com',
    title: 'Wall Street Analysts Are Divided on Circle Stock After Blockbuster IPO',
    description: '',
    url: 'https://biztoc.com/x/a4481ef8ab0dee5c',
    urlToImage: 'https://biztoc.com/cdn/950/og.png',
    publishedAt: '2025-06-30T17:13:12Z',
    content: 'Wall Street opinions split after Circle’s high-profile IPO...',
  },
  // More blogs...
];

const BlogCard = ({ blog }) => {
  const {
    title,
    author,
    content,
    url,
    urlToImage,
    publishedAt,
  } = blog;

  return (
    <div className="border p-4 mb-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 bg-white max-sm:bg-gray-100">
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-bold text-gray-900">{title || 'Untitled Blog'}</h2>
        <p className="text-sm text-gray-600">{author || 'Unknown Author'}</p>
        <p className="text-xs text-gray-400">
          {new Date(publishedAt).toLocaleDateString(undefined, {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>
        <p className="text-gray-800 text-sm">
          {content?.slice(0, 150) || 'No preview available...'}
        </p>
        {urlToImage && (
          <img
            src={urlToImage}
            alt={title}
            className="h-60 w-full object-cover rounded-md mt-2"
          />
        )}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lime-600 font-medium hover:underline mt-2 w-fit"
        >
          Read more
        </a>
      </div>
    </div>
  );
};

const BlogList = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-center mb-2 max-sm:text-lg">
        Latest Blog Posts
      </h1>
      <p className="text-sm text-gray-700 text-center mb-6">
        Stay informed with the latest in tech, finance, and innovation.
      </p>
      {Blogs.map((blog, index) => (
        <BlogCard key={index} blog={blog} />
      ))}
    </div>
  );
};

export default BlogList;
