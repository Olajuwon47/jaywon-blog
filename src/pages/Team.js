import React from 'react';
import '../index.css';

const people = [
  {
    name: 'Leslie Alexander',
    email: 'leslie.alexander@example.com',
    role: 'Co-Founder / CEO',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastSeen: '3h ago',
    lastSeenDateTime: '2024-12-25T13:23Z',
  },
  {
    name: 'Michael Foster',
    email: 'michael.foster@example.com',
    role: 'Co-Founder / CTO',
    imageUrl: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastSeen: '3h ago',
    lastSeenDateTime: '2024-12-25T13:23Z',
  },
  {
    name: 'Dries Vincent',
    email: 'dries.vincent@example.com',
    role: 'Business Relations',
    imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastSeen: null,
  },
  {
    name: 'Lindsay Walton',
    email: 'lindsay.walton@example.com',
    role: 'Front-end Developer',
    imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastSeen: '3h ago',
    lastSeenDateTime: '2024-12-23T13:23Z',
  },
  {
    name: 'Courtney Henry',
    email: 'courtney.henry@example.com',
    role: 'Designer',
    imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastSeen: '3h ago',
    lastSeenDateTime: '2024-12-24T13:23Z',
  },
  {
    name: 'Tom Cook',
    email: 'tom.cook@example.com',
    role: 'Director of Product',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastSeen: null,
  },
  {
    name: "Kristin Watson",
    email: 'kristin.watson@example.com',
    role: "Customer Success Manager",
    imageUrl: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: null,
  },
  {
    name: "Jane Cooper",
    role: "Chief Marketing Officer",
    imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: '3h ago',
    lastSeenDateTime: '2024-12-25T13:23Z',
  },
  {
    name: "Robert Fox",
    role: "Chief Operating Officer",
    imageUrl: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: null,
  },
];

export default function TeamShowcase() {
  return (
    <div className="bg-lime-50 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-xl">
          <h2 className="text-pretty text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Meet Our Team 👥
          </h2>
          <p className="mt-4 text-md text-gray-600">
            Each member of our crew brings a unique spark ⚡ — combining passion, creativity, and years of industry expertise. Together, we don’t just build — we innovate, inspire, and push boundaries.
          </p>
          <p className="mt-2 text-sm text-gray-500 italic">
            *Status indicators reflect recent activity within our workspace.*
          </p>
        </div>

        <ul role="list" className="divide-y divide-gray-200 col-span-2">
          {people.map((person) => (
            <li key={person.email || person.name} className="flex justify-between gap-x-6 py-5">
              <div className="flex min-w-0 gap-x-4">
                <img
                  src={person.imageUrl}
                  alt={`Portrait of ${person.name}`}
                  className="size-12 flex-none rounded-full bg-gray-50"
                />
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold text-gray-900">{person.name}</p>
                  {person.email ? (
                    <p className="mt-1 truncate text-xs text-gray-500">{person.email}</p>
                  ) : (
                    <p className="mt-1 text-xs text-gray-400 italic">No email provided</p>
                  )}
                </div>
              </div>
              <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <p className="text-sm text-gray-900">💼 {person.role}</p>
                {person.lastSeen ? (
                  <p className="mt-1 text-xs text-gray-500">
                    ⌛ Last seen{' '}
                    <time dateTime={person.lastSeenDateTime}>{person.lastSeen}</time>
                  </p>
                ) : (
                  <div className="mt-1 flex items-center gap-x-1.5">
                    <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                      <div className="size-1.5 rounded-full bg-emerald-500" />
                    </div>
                    <p className="text-xs text-gray-500">🟢 Online</p>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Partner Logos */}
      <div className="mx-auto max-w-7xl mt-20 px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold text-gray-900">
          Trusted by the world’s most innovative teams 🤝
        </h2>
        <p className="text-center text-sm text-gray-500 mt-2">
          From startups to industry leaders, these companies trust the people behind our platform.
        </p>

        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <img alt="Transistor logo" src="https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-gray-900.svg" width={158} height={48} className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 beatFade" />
          <img alt="Reform logo" src="https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-gray-900.svg" width={158} height={48} className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 beatFade" />
          <img alt="Tuple logo" src="https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-gray-900.svg" width={158} height={48} className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 beatFade" />
          <img alt="SavvyCal logo" src="https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-gray-900.svg" width={158} height={48} className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1 beatFade" />
          <img alt="Statamic logo" src="https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-gray-900.svg" width={158} height={48} className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1 beatFade" />
        </div>
      </div>
    </div>
  );
}
