'use client'
import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/16/solid';
import { useNavigate } from "react-router";

export default function Create() {
  const [title, setTitle] = useState('');
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');
  const [urlImage, setUrlImage] = useState('');
  const [content, setContent] = useState('');
  const [blog, setBlog] = useState('Business, Football, Entertainment, Education, Fashion, Technology')
  const [publishedAt, setPublishedAt] = useState('');
  const [ispending, setIsPending] = useState(false);
  const navigate= useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    const Blog = {
      title,
      name,
      author,
      description,
      url,
      urlImage,
      content,
      blog,
      publishedAt,
    };
    setIsPending(true)
    
    //console.log(Blog);
   fetch('http://localhost:3001/Data/blog',{
    method:'POST',
    headers:{"Content-Type": "application/json" },
    body:JSON.stringify(Blog),
   }).then(() =>{
    console.log('New Blog Added')
    setIsPending(false)
    navigate.push('/')
   })
  };
  return (
    <div className="isolate bg-lime-50 px-6 py-24 sm:py-32 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Create Blog</h2>
        <p className="mt-2 text-lg/8 text-gray-600">Share your thoughts with the world by creating an engaging blog post.</p>
      </div>
      <form onSubmit={handleSubmit} action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20" >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="block text-sm/6 font-semibold text-gray-900">
              Name
            </label>
            <div className="mt-2.5">
              <input
                id="name"
                name="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                autoComplete="name"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-lime-300"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="author" className="block text-sm/6 font-semibold text-gray-900">
              Author
            </label>
            <div className="mt-2.5">
              <input
                id="author"
                name="author"
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                required
                autoComplete="author"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          <div>
            <label htmlFor="title" className="block text-sm/6 font-semibold text-gray-900">
              Title
            </label>
            <div className="mt-2.5">
              <input
                id="title"
                name="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                autoComplete="given-title"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="description" className="block text-sm/6 font-semibold text-gray-900">
            Description
            </label>
            <div className="mt-2.5">
              <input
                id="description"
                name="description"
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                autoComplete="description"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          <div className="col-span-full">
              <label htmlFor="photo" className="block text-sm/6 font-medium text-gray-900">
              url
              </label>
              <input
              id="urlImage"
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              required
              className="mt-2.5 block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline-indigo-600"
            />
            </div>
          <div className="col-span-full">
              <label htmlFor="photo" className="block text-sm/6 font-medium text-gray-900">
              urlToImage
              </label>
              <input
              id="urlImage"
              type="text"
              value={urlImage}
              onChange={(e) => setUrlImage(e.target.value)}
              required
              className="mt-2.5 block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline-indigo-600"
            />
            </div>
          <div className="sm:col-span-2">
            <label htmlFor="publishedAt" className="block text-sm/6 font-semibold text-gray-900">
            publishedAt
            </label>
            <div className="mt-2.5">
              <input
                id="publishedAt"
                name="publishedAt"
                type="datetime-local"
                value={publishedAt}
              onChange={(e) => setPublishedAt(e.target.value)}
                autoComplete="publishedAt"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
            </div>
            <div className="sm:col-span-2">
            <label htmlFor="content" className="block text-sm/6 font-semibold text-gray-900">
              Content
            </label>
            <div className="mt-2.5">
              <input
                id="content"
                name="content"
                type="text"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
                autoComplete="content"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          <div >
            <label htmlFor="blog" className="block text-sm/6 font-semibold text-gray-900">
              Blog
            </label>
            <div className="mt-2.5">
              <div className="flex rounded-md bg-white outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline
               has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-lime-300">
                <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                  <select
                    id="blog"
                    name="blog"
                    value={blog}
                    onChange={(e) => setBlog(e.target.value)}
                    required
                    autoComplete="blog"
                    aria-label="Blog"
                    title="Choose a blog category"
                    className="col-start-1 row-start-1 w-fit appearance-none rounded-md py-1.5 pl-3.5 pr-7 text-base text-gray-500
                     placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-lime-600 sm:text-sm/6"
                  >
                    <option value="">Select a category</option>
                    <option>Business</option>
                    <option>Football</option>
                    <option>Fashion</option>
                    <option>Entertainment</option>
                    <option>Education</option>
                    <option>Technology</option>
                  </select>
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5">
        { !ispending && <button
            type="Submit"
            className="block w-50 rounded-md bg-lime-50 px-3.5 py-2.5 text-center text-sm font-semibold text-black shadow-sm hover:bg-lime-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add blog
          </button>}
          { ispending && <button disabled
            type="Submit"
            className="block w-50 rounded-md bg-lime-50 px-3.5 py-2.5 text-center text-sm font-semibold text-black shadow-sm hover:bg-lime-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
           Adding blog........
          </button>}
        </div>
      </form>
    </div>
  )
}
