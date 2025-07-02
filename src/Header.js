'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'


const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Price', href: '/Price' },
  { name: 'About Us', href: '/About' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact Us', href: '/contract' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
   
  return (
    <div className="">
      <header className="fixed inset-x-0 bg-lime-200 top-0 z-50">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-4 max-sm:p-3 max-md:p-4 lg:px-8"
        >
          {/* Logo */}
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Jaywon's Blog</span>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHF-7A-qbiUrPZB1IGK9Yj7QsElYUFaFKbww&s"
                alt="Logo"
                className="h-14 max-sm:h-10 w-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex lg:gap-x-10 lg:flex-1 lg:justify-center">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-white-600 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden lg:flex-1 lg:justify-end">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Empty div for balance on desktop */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            {/* This empty div balances the layout */}
          </div>
        </nav>

        {/* Mobile Navigation */}
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-white px-6 py-6 overflow-y-auto sm:max-w-sm">
            <div className="flex items-center justify-between">
              <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Jaywon's Blog</span>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHF-7A-qbiUrPZB1IGK9Yj7QsElYUFaFKbww&s"
                 alt="Mobile Logo"
                  className="h-14 max-sm:h-10 w-auto" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-200">
                <div className="space-y-4 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block text-base font-medium text-gray-900 hover:text-white-600"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      
    </div>
  )
}
