'use client';

import React, { useEffect, useState } from "react";
import { CheckIcon } from "@heroicons/react/20/solid";
import Subscribe from './subscribe.js';

const tiers = [
  {
    name: "Free plan",
    id: "tier-basic",
    href: "#",
    price: "$0",
    features: [
  "Access to all blog articles",
  "Weekly newsletter",
  "Commenting privileges",
  "Ad-supported experience"
    ],

    featured: false,
  },
  {
    name: "Monthly",
    id: "tier-premium",
    href: "#",
    price: "$29",
   features: [
  "All Free Plan features",
  "Ad-free reading experience 🚫🧾",
  "Exclusive premium articles 🔒✨",
  "Priority customer support ⚡",
  "Monthly personalized analytics 📊"
   ],

    featured: true,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SUBCRIPTION() {
  const [showContent, setShowContent] = useState(false);
  const [showCards, setShowCards] = useState(false);

  useEffect(() => {
    const timeout1 = setTimeout(() => setShowContent(true), 400);
    const timeout2 = setTimeout(() => setShowCards(true), 600);
    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, []);

  return (
  <>
    <div className="overflow-x-hidden w-full top-0 bg-lime-500 relative">
      {/* Top animated curve */}
      <div
        className="absolute top-0 left-0 w-full h-[75vh] bg-lime-100 z-10 animate-slide-down-curve"
        style={{
          clipPath: "polygon(0 0, 0 60%, 50% 100%, 100% 60%, 100% 0)",
        }}
      ></div>

      <div className="relative isolate px-6 py-14 sm:py-32 lg:px-8 z-20 max-sm:px-4 max-md:px-6">
        {/* Header */}
        <div
          className={classNames(
            "mx-auto max-w-4xl text-center transition-opacity duration-500",
            showContent ? "animate-fade-in opacity-100" : "opacity-0"
          )}
        >
          <h1 className="text-4xl font-bold text-black max-sm:text-2xl max-md:text-3xl">
            Our Pricing
          </h1>
          <p className="text-lg text-gray-500 font-bold max-w-2xl mx-auto mt-4 max-sm:text-sm max-md:text-base">
            Choose a plan that suits your journey 📖 whether you're a casual reader or a knowledge-hungry explorer. Our subscriptions unlock deeper insights, premium content, and an ad-free experience designed to keep you focused and inspired. 💡✨
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mx-auto mt-20 grid max-w-lg grid-cols-1 gap-y-9 sm:grid-cols-2 sm:gap-x-6 lg:max-w-4xl max-sm:mt-10 max-md:mt-14">
          {tiers.map((tier, index) => (
            <div
              key={tier.id}
              className={classNames(
                tier.featured
                  ? "bg-white text-sm text-black ring-1 ring-lime-200"
                  : "bg-lime-200 text-sm ring-1 ring-black",
                "rounded-lg p-8 transition-transform duration-300 ease-in-out hover:scale-105 opacity-0",
                showCards
                  ? index === 0
                    ? "animate-slide-in-left opacity-100"
                    : "animate-slide-in-right opacity-100"
                  : "",
                "max-sm:p-4 max-md:p-6"
              )}
            >
              <h3 className={classNames(
                tier.featured ? "text-lime-400" : "text-black",
                "text-lg font-semibold max-sm:text-base"
              )}>
                {tier.name}
              </h3>

              <p className="mt-4 flex items-baseline gap-x-2">
                <span className={classNames(
                  "text-4xl font-bold",
                  tier.price === "$0" ? "text-black" : "text-lime-400",
                  "max-sm:text-2xl"
                )}>
                  {tier.price}
                </span>
                <span className={classNames(
                  tier.featured ? "text-lime-400 mb-7" : "text-black mb-7",
                  "text-base max-sm:text-sm"
                )}>
                  /month
                </span>
              </p>

              <ul className="mt-12 space-y-3 max-sm:mt-6">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start space-x-3">
                    <CheckIcon
                      className={classNames(
                        tier.featured ? "text-black bg-lime-200" : "text-lime-700 bg-white",
                        "h-4 w-4 flex-none"
                      )}
                      aria-hidden="true"
                    />
                    <span className={classNames(
                      tier.featured ? "text-lime-400" : "text-black",
                      "ml-1 text-sm max-sm:text-xs"
                    )}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={tier.href}
                className={classNames(
                  tier.featured
                    ? "bg-lime-700 text-white hover:bg-lime-100"
                    : "bg-lime-50 text-black hover:bg-lime-700",
                  "mt-9 mb-12 block w-40 rounded-md py-2 px-4 text-center font-semibold hover:scale-105 transition-transform duration-200 max-sm:w-full"
                )}
                onClick={() => alert(`You selected the ${tier.name}`)}
              >
                {tier.price === "$0" ? "Upgrade" : "Subscribe Now"}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>

     <Subscribe/>
  </>
  );
}
