import React from 'react';
import './index.css';

export default function Footer() {
  return (
    <footer className="bg-lime-200 text-black p-8 max-sm:p-4 max-md:p-6" aria-label="Site Footer">
      <div className="grid md:grid-cols-4 gap-8 max-sm:grid-cols-1 max-sm:gap-4 max-md:grid-cols-2 max-md:gap-6">

        {/* Features */}
        <div>
          <h1 className="text-lg font-semibold mb-1 max-sm:text-base max-md:text-lg">Features 🧩</h1>
          <p className="text-sm text-gray-700 mb-2">Learn more about our platform and what drives us.</p>
          <ul className="space-y-2 max-sm:space-y-1">
            <li><a href="/about" className="hover:text-white text-black max-sm:text-sm">About</a></li>
            <li><a href="/terms" className="hover:text-white text-black max-sm:text-sm">Terms</a></li>
            <li><a href="/partner" className="hover:text-white text-black max-sm:text-sm">Partners</a></li>
            <li><a href="/updates" className="hover:text-white text-black max-sm:text-sm">Updates</a></li>
          </ul>
        </div>

        {/* Details */}
        <div>
          <h1 className="text-lg font-semibold mb-1 max-sm:text-base max-md:text-lg">Details 🔎</h1>
          <p className="text-sm text-gray-700 mb-2">Technical tools and resources at your fingertips.</p>
          <ul className="space-y-2 max-sm:space-y-1">
            <li><a href="/specs" className="hover:text-white text-black max-sm:text-sm">Specs</a></li>
            <li><a href="/tools" className="hover:text-white text-black max-sm:text-sm">Tools</a></li>
            <li><a href="/resources" className="hover:text-white text-black max-sm:text-sm">Resources</a></li>
          </ul>
        </div>

        {/* Technology */}
        <div>
          <h1 className="text-lg font-semibold mb-1 max-sm:text-base max-md:text-lg">Technology 🛠️</h1>
          <p className="text-sm text-gray-700 mb-2">Explore how we work under the hood.</p>
          <ul className="space-y-2 max-sm:space-y-1">
            <li><a href="/how-it-works" className="hover:text-white text-black max-sm:text-sm">How it works</a></li>
            <li><a href="/patterns" className="hover:text-white text-black max-sm:text-sm">Patterns</a></li>
            <li><a href="/usage" className="hover:text-white text-black max-sm:text-sm">Usage</a></li>
            <li><a href="/products" className="hover:text-white text-black max-sm:text-sm">Products</a></li>
            <li><a href="/contracts" className="hover:text-white text-black max-sm:text-sm">Contracts</a></li>
          </ul>
        </div>

        {/* FAQ */}
        <div>
          <h1 className="text-lg font-semibold mb-1 max-sm:text-base max-md:text-lg">FAQ ❓</h1>
          <p className="text-sm text-gray-700 mb-2">Answers and support for common questions.</p>
          <ul className="space-y-2 max-sm:space-y-1">
            <li><a href="/questions" className="hover:text-white text-black max-sm:text-sm">Questions</a></li>
            <li><a href="/answers" className="hover:text-white text-black max-sm:text-sm">Answers</a></li>
            <li><a href="/contact-us" className="hover:text-white text-black max-sm:text-sm">Contact us</a></li>
          </ul>
        </div>
      </div>

      {/* Social Media */}
      <div className="mt-10 flex flex-wrap justify-center space-x-6 max-sm:mt-6 max-sm:space-x-4 max-md:mt-7 max-md:space-x-5">
        <a href="https://facebook.com" aria-label="Facebook" className="hover:text-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40" className="fill-current max-sm:h-8 max-sm:w-8 max-md:h-9 max-md:w-9" viewBox="0 0 512 512">
            <title>Facebook</title>
            <path d="..."/>
          </svg>
        </a>
        <a href="https://instagram.com/mrmrs_" aria-label="Instagram" className="hover:text-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40" className="fill-current max-sm:h-8 max-sm:w-8 max-md:h-9 max-md:w-9" viewBox="0 0 448 512">
            <title>Instagram</title>
            <path d="..."/>
          </svg>
        </a>
        <a href="https://youtube.com" aria-label="YouTube" className="hover:text-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40" className="fill-current max-sm:h-8 max-sm:w-8 max-md:h-9 max-md:w-9" viewBox="0 0 576 512">
            <title>YouTube</title>
            <path d="..."/>
          </svg>
        </a>
        <a href="https://twitter.com/mrmrs_" aria-label="Twitter" className="hover:text-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40" className="fill-current max-sm:h-8 max-sm:w-8 max-md:h-9 max-md:w-9" viewBox="0 0 512 512">
            <title>Twitter</title>
            <path d="..."/>
          </svg>
        </a>
      </div>

      {/* Optional Newsletter */}
      <div className="mt-12 text-center max-sm:mt-10 max-md:mt-10">
        <h2 className="text-lg font-semibold mb-2">Stay Updated 📩</h2>
        <p className="text-sm text-gray-700 mb-4">Subscribe to our newsletter for the latest posts & updates.</p>
        <form className="flex justify-center gap-2 max-sm:flex-col max-sm:items-center">
          <input type="email" placeholder="Your email address" className="p-2 rounded-md w-64 max-sm:w-full" />
          <button type="submit" className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">Subscribe</button>
        </form>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center max-sm:mt-6 max-md:mt-7">
        <p className="max-sm:text-sm max-md:text-base">&copy; 2025 BlogS. All rights reserved.</p>
        <nav className="mt-4 space-x-4 max-sm:mt-3 max-sm:flex max-sm:flex-col max-sm:space-x-0 max-sm:space-y-2 max-md:space-x-3">
          <a href="/privacy-policy" className="hover:text-white text-black max-sm:text-sm max-md:text-base">Privacy Policy</a>
          <a href="/terms-of-service" className="hover:text-white text-black max-sm:text-sm max-md:text-base">Terms of Service</a>
          <a href="/support" className="hover:text-white text-black max-sm:text-sm max-md:text-base">Support</a>
        </nav>
        <p className="text-sm text-gray-600 mt-4">BlogS — Curated knowledge, powered by passion. 📚</p>
      </div>
    </footer>
  );
}
