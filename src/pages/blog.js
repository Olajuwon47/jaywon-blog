import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router';

export default function Bloglist() {
  const [blogs, setBlogs] = useState([]);
   const [searchTerm, setSearchTerm] = useState("");
  const navigate= useNavigate()


  useEffect(() => {
    async function fetchBlogs() {
      try {
       /* const cachedData = localStorage.getItem('/Data/blog.json');
        if (cachedData) {
          try {
            const parsedData = JSON.parse(cachedData);
            console.log('Using cached data:', parsedData);
            setBlogs(Array.isArray(parsedData) ? parsedData : []);
            return;
          } catch (error) {
            console.error('Error parsing cached data:', error);
          }
        }*/

        const response = await fetch('/Data/blogs.json');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Fetched data from server:', data);

        // Cache data in localStorage and update state
        localStorage.setItem('/Data/blog.json', JSON.stringify(data));
        setBlogs(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error('Failed to fetch blogs:', error);
      }
    }

    fetchBlogs();
  }, []);

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            From the blog
          </h2>
          <p className="mt-2 text-lg/8 text-gray-900">
            Learn how to grow your business with our expert advice.
          </p>

             {/* Search */}
        <div className="max-w-xl mx-auto">
          <div className="relative bg-gradient-to-l from-blue-600 via-purple-700 to-rose-900 p-[2px] rounded-md">
            <div className="bg-white rounded-md flex items-center">
              <svg
                className="ml-3 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M17 17A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.5 13.5z"
                />
              </svg>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search courses, departments, etc..."
                className="w-full px-8 py-2 pl-4 rounded-sm outline-none bg-white text-gray-800"
              />
            </div>
          </div>
        </div>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {blogs.map((blog) => (
            <article key={blog.id} className="flex max-w-xl rounded-lg bg-lime-200 flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={blog.publishedAt} className="text-gray-900">
                  {new Date(blog.publishedAt).toLocaleDateString()}
                </time>
                <Link
                  to={blog.url}
                  className="relative z-10 rounded-full bg-lime-700 px-3 py-1.5 font-medium text-gray-600 hover:bg-lime-100"
                >
                  {blog.source?.name || 'Source'}
                </Link>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg/6 font-semibold text-gray-500 group-hover:text-black">
                  <Link to={blog.url}>
                    <span className="absolute inset-0" />
                    {blog.title}
                  </Link>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">{blog.description}</p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                {blog.urlToImage && (
                  <img
                    alt={blog.title}
                    src={blog.urlToImage}
                    className="h-10 w-10 rounded-full bg-gray-50"
                  />
                )}
                <div className="text-sm/6">
                  <p className="font-semibold text-gray-900">
                    <Link to={blog.url}>
                      <span className="absolute inset-0" />
                      {blog.author?.name || 'Unknown Author'}
                    </Link>
                  </p>
                  <p className="text-gray-600">{blog.source?.name || 'Source'}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

         <div className="mt-8 max-sm:mt-6 flex flex-wrap items-center justify-center gap-x-6">
              <Link
                to="/Add"
                className="rounded-md bg-lime-700 px-4 py-2 text-sm max-sm:px-3 max-sm:py-1.5 font-semibold text-black shadow-sm hover:bg-lime-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300"
              >
                Add Blog
              </Link>
            </div>
      </div>
    </div>
  );
}
