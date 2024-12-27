import React from 'react';
import { CheckIcon } from '@heroicons/react/20/solid';

const tiers = [
  {
    name: 'Basic',
    id: 'tier-basic',
    href: '#',
    priceMonthly: '$9',
    description: 'For casual readers and personal blogs.',
    features: [
      'Access to all blog articles',
      'Weekly newsletter',
      'Commenting privileges',
      'Ad-supported experience',
    ],
    featured: false,
  },
  {
    name: 'Premium',
    id: 'tier-premium',
    href: '#',
    priceMonthly: '$29',
    description: 'For professional bloggers and businesses.',
    features: [
      'Everything in Basic',
      'Ad-free experience',
      'Exclusive premium articles',
      'Priority support',
      'Monthly analytics report',
    ],
    featured: true,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function PricingPage() {
  return (
    <div className="relative isolate bg-lime-50 px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-base font-semibold text-gray-600">Pricing</h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Plans for every kind of blogger
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
          Choose the plan that suits your needs and start your blogging journey with us today.
        </p>
      </div>
      <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-y-6 sm:mt-20 sm:grid-cols-2 sm:gap-x-6 lg:max-w-4xl">
        {tiers.map((tier) => (
          <div
            key={tier.id}
            className={classNames(
              tier.featured ? 'bg-lime-600 text-white shadow-xl' : 'bg-white ring-1 ring-gray-200',
              'rounded-lg p-8',
            )}
          >
            <h3 className={classNames(tier.featured ? 'text-white' : 'text-indigo-600', 'text-lg font-semibold')}>
              {tier.name}
            </h3>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span className={classNames(tier.featured ? 'text-white' : 'text-gray-900', 'text-4xl font-bold')}>
                {tier.priceMonthly}
              </span>
              <span className={classNames(tier.featured ? 'text-indigo-200' : 'text-gray-500', 'text-base')}>/month</span>
            </p>
            <p className={classNames(tier.featured ? 'text-indigo-200' : 'text-gray-600', 'mt-6')}>
              {tier.description}
            </p>
            <ul className="mt-6 space-y-3">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-center">
                  <CheckIcon
                    className={classNames(
                      tier.featured ? 'text-white' : 'text-gray-100',
                      'h-6 w-6 flex-none',
                    )}
                    aria-hidden="true"
                  />
                  <span className={classNames(tier.featured ? 'text-indigo-100' : 'text-gray-800', 'ml-3')}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
            <a
              href={tier.href}
              className={classNames(
                tier.featured
                  ? 'bg-lime-300 text-white hover:bg-lime-900'
                  : 'bg-lime-300 text-white hover:bg-lime-900',
                'mt-4 block w-full rounded-md py-2 px-4 text-center font-semibold',
              )}
            >
              Choose Plan
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
