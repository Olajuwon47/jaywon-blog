import { useState, useEffect } from 'react'
 import { Link } from "react-router";
 
  export default function Bloglist() {
   const [blogs, setblogs] = useState([])

   useEffect(() => {
      async function fetchBlogs() {
        try {
        const cachedData = localStorage.getItem('/Data/blog.json');
        if (cachedData) {
          const parsedData = JSON.parse(cachedData);
          console.log('Cached data:', parsedData);
          setblogs(Array.isArray(parsedData) ? parsedData : []);
          return;
        }
      const response = await fetch('http://localhost:3000/Data/blog.json');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log('Fetched data:', data);
      //localStorage.setItem('/Data/blog.json', JSON.stringify(data));
      setblogs(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Failed to fetch blogs:', error);
    }
    
    }
     fetchBlogs();
   }, []);
    
    return (
      <div className="bg-lime-300 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">From the blog</h2>
            <p className="mt-2 text-lg/8 text-gray-600">Learn how to grow your business with our expert advice.</p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {blogs.map((blog, index) => (
              <article key={index} className="flex max-w-xl flex-col items-start justify-between">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={blog.publishedAt} className="text-gray-500">
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
                  <img alt={blog.title} src={blog.urlToImage} className="size-10 rounded-full bg-gray-50" />)}
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
        </div>
      </div>
    )
  }
  