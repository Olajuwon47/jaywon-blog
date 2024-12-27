import React from 'react';
import '../index.css';
export default function Footer() {
    return (
      <footer className="bg-emerald-400  text-black p-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <input type="checkbox" className="hidden" defaultChecked />
            <h1 className="text-lg font-semibold text-black-500 mb-3">Features</h1>
            <ul className="space-y-2">
              <li><a href="/About" className="hover:text-white">About</a></li>
              <li><a href="/Terms" className="hover:text-white">Terms</a></li>
              <li><a href="/Partner" className="hover:text-white">Partners</a></li>
              <li><a href="/Updates" className="hover:text-white">Updates</a></li>
            </ul>
          </div>
          <div>
            <input type="checkbox" className="hidden" defaultChecked />
            <h1 className="text-lg font-semibold  text-black mb-3">Details</h1>
            <ul className="space-y-2">
              <li><a href="/Specs" className="hover:text-white">Specs</a></li>
              <li><a href="/Tools" className="hover:text-white">Tools</a></li>
              <li><a href="/Resources" className="hover:text-white">Resources</a></li>
            </ul>
          </div>
          <div>
            <input type="checkbox" className="hidden" defaultChecked />
            <h1 className="text-lg font-semibold  text-black mb-3">FAQ</h1>
            <ul className="space-y-2">
              <li><a href="Questions" className="hover:text-white">Questions</a></li>
              <li><a href="/Answers" className="hover:text-white">Answers</a></li>
              <li><a href="/Contact us" className="hover:text-white">Contact us</a></li>
            </ul>
          </div>
        </div>
  
        <div className="mt-8 flex flex-wrap justify-center space-x-6">
          <a href="https://facebook.com" className="text-gray-400 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40" className="fill-current beatFade" viewBox="0 0 512 512">
              <path fill="#050505" d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/>
            </svg>
            Facebook
          </a>
          <a href="https://instagram.com/mrmrs_" className="text-gray-400 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40" className="fill-current beatFade" viewBox="0 0 448 512">
              <path fill="#111212" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8z"/>
            </svg>
            Instagram
          </a>
          <a href="https://youtube.com" className="text-gray-400 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40" className="fill-current beatFade" viewBox="0 0 576 512">
              <path fill="#0d0d0d" d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"/>
            </svg>
            YouTube
          </a>
          <a href="https://twitter.com/mrmrs_" className="text-gray-400 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40" className="fill-current beatFade" viewBox="0 0 512 512">
              <path fill="#080808" d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/>
            </svg>
            Twitter
          </a>
        </div>
  
        <div className="mt-8 text-center">
          <p className="#">&copy; 2025 BLOG. All rights reserved.</p>
          <nav className="mt-4 space-x-4">
            <a href="https://zigarmy.com/privacy-policy" className="hover: text-black">Privacy Policy</a>
            <a href="/Terms of Service" className="hover:text-white">Terms of Service</a>
            <a href="/Support" className="hover:text-white">Support</a>
          </nav>
        </div>
      </footer>
    );
  };
  
  
  
  