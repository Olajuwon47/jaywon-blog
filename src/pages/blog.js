import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router';

export default function Bloglist() {
  const [blogs, setBlogs] = useState([]);
  const navigate= useNavigate()

  const handleclick = (id) => {
    fetch('http://localhost:3001/api/blogs'+ blogs.id, {
      metod:'DELETE'
    }).then(()=>{
      navigate.push('/')
      setBlogs(blogs.filter(blog => blog.id !== id));
    })
    .catch((error) => {
      console.error('Error deleting blog:', error);
    });
    };

  useEffect(() => {
    async function fetchBlogs() {
      try {
        // Check for cached data in localStorage
        const cachedData = localStorage.getItem('/Data/blog.json');
        if (cachedData) {
          try {
            const parsedData = JSON.parse(cachedData);
            console.log('Using cached data:', parsedData);
            setBlogs(Array.isArray(parsedData) ? parsedData : []);
            return;
          } catch (error) {
            console.error('Error parsing cached data:', error);
          }
        }

        // Fetch data from the server
        const response = await fetch('http://localhost:3001/api/blogs');
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
    <div className="bg-lime-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            From the blog
          </h2>
          <p className="mt-2 text-lg/8 text-gray-900">
            Learn how to grow your business with our expert advice.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {blogs.map((blog) => (
            <article key={blog.id} className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={blog.publishedAt} className="text-gray-900">
                  {new Date(blog.publishedAt).toLocaleDateString()}
                </time>
                <Link
                  to={blog.url}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {blog.source?.name || 'Source'}
                </Link>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
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
        <div className="mt-5">
          <button onClick={handleclick}
            type="delete"
            className= "block w-50 rounded-md bg-lime-50 px-3.5 py-2.5 text-center text-sm font-semibold text-black shadow-sm hover:bg-lime-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
          Delete
          </button>
        </div>
      </div>
    </div>
  );
}
