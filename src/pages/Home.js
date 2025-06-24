'use client'
import { useState } from 'react'
import { Link } from "react-router"

export default function Home() {
  return (
    <div className="#">
      <div className="relative isolate px-4 pt-10 sm:px-6 sm:pt-14 md:px-8 lg:px-8">
        <div className="mx-auto max-w-2xl py-20 sm:py-32 md:py-40 lg:py-56">
          <div className="text-center">
            <h1 className="text-balance text-4xl max-sm:text-2xl max-md:text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl">
              Data to enrich your online business
            </h1>

            <p className="mt-6 max-sm:mt-4 text-pretty text-base max-sm:text-sm max-md:text-md font-medium text-gray-700 sm:text-lg md:text-xl/8">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.
            </p>

            <div className="mt-8 max-sm:mt-6 flex flex-wrap items-center justify-center gap-x-6">
              <Link
                to="/blog"
                className="rounded-md bg-lime-700 px-4 py-2 text-sm max-sm:px-3 max-sm:py-1.5 font-semibold text-black shadow-sm hover:bg-lime-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300"
              >
                Get started
              </Link>
            </div>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
        
        </div>
      </div>
    </div>
  )
}
