import React from 'react';
const stats = [
    { id: 1, name: 'Articles published monthly', value: '120+' },
    { id: 2, name: 'Global readership', value: '1.5 million+' },
    { id: 3, name: 'New contributors yearly', value: '500+' },
    { id: 4, name: 'Transactions every 24 hours', value: '44 million' },
    { id: 5, name: 'New users annually', value: '46,000' },
    { id: 6, name: 'Social media followers', value: '2.3 million+' },
    { id: 7, name: 'Average session duration', value: '5 minutes' },
    { id: 8, name: 'Newsletter subscribers', value: '800,000+' },
    { id: 9, name: 'Unique monthly visitors', value: '3.2 million' },
    { id: 10, name: 'Number of blog categories', value: '25+' },
    { id: 11, name: 'Positive feedback rate', value: '98%' },
    { id: 12, name: 'Years in operation', value: '10+' },
    { id: 13, name: 'Partnered organizations', value: '200+' },
    { id: 14, name: 'Languages supported', value: '12' },
    { id: 15, name: 'Total comments annually', value: '1.2 million+' },
    { id: 16, name: 'Daily active users', value: '250,000+' },
    { id: 17, name: 'Blogs with over 10k views', value: '50%' },
];
 
  export default function Example() {
    return (
      <div className="bg-green-300 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base/7 text-black ">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    )
  }
  