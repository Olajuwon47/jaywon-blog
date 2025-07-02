import { useState, useEffect } from 'react';

export default function Bloglist() {
  const [blogs, setBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    async function fetchAllBlogs() {
      const urls = ["/Data/blogs.json"];
      try {
        const responses = await Promise.all(urls.map((url) => fetch(url)));
        const data = await Promise.all(responses.map((res) => res.json()));
        const allArticles = data
          .flatMap((d) => d.articles || d)
          .filter((a) => a && a.title);
        setBlogs(allArticles);
      } catch (error) {
        console.error("Failed to fetch multiple sources:", error);
      }
    }
    fetchAllBlogs();
  }, []);

  const filteredBlogs = blogs.filter(blog =>
    blog.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.author?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const visibleBlogs = filteredBlogs.slice(0, visibleCount);

  return (
    <div className="bg-lime-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            From the blog
          </h2>
          <p className="mt-2 text-lg text-gray-900">
            Learn how to grow your business with our expert advice.
          </p>

          <div className="max-w-xl mx-auto mt-6 max-sm:w-full max-md:w-3/4">
            <div className="relative bg-black p-[2px] rounded-md">
              <div className="bg-white rounded-md flex items-center">
                <svg className="ml-3 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 17A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.5 13.5z" />
                </svg>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search blogs by title, description, or author..."
                  className="w-full px-8 py-2 pl-4 rounded-sm outline-none bg-white text-gray-800"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none sm:grid-cols-2 lg:grid-cols-3">
          {visibleBlogs.map((blog, index) => (
            <article key={index} className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={blog.publishedAt} className="text-gray-900">
                  {new Date(blog.publishedAt).toLocaleDateString()}
                </time>
                <a href={blog.url} target="_blank" rel="noopener noreferrer" className="rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                  {blog.source?.name || 'Source'}
                </a>
              </div>

              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold text-gray-900 group-hover:text-gray-600">
                  <a href={blog.url} target="_blank" rel="noopener noreferrer">
                    <span className="absolute inset-0" />
                    {blog.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm text-gray-600">{blog.description}</p>
              </div>

              <div className="relative mt-8 flex items-center gap-x-4">
                {blog.urlToImage && (
                  <img
                    alt={blog.title}
                    src={blog.urlToImage}
                    className="h-40 w-40 rounded-full bg-gray-50 object-cover"
                  />
                )}
                <div className="text-sm">
                  <p className="font-semibold text-gray-900">
                    {blog.author || 'Unknown Author'}
                  </p>
                  <p className="text-gray-600">{blog.source?.name || 'Source'}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {visibleCount < filteredBlogs.length && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setVisibleCount(visibleCount + 6)}
              className="inline-block rounded-md bg-lime-600 px-6 py-2 text-white font-semibold hover:bg-lime-700 transition"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
