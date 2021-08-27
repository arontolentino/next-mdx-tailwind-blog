/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { ChevronDownIcon } from '@heroicons/react/solid';

export default function Hero() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 sm:py-24 lg:justify-between">
        <h2 className="text-4xl font-extrabold text-gray-900 sm:text-4xl sm:tracking-tight lg:text-5xl">
          I build full-stack JavaScript applications at Outgive.
        </h2>
        <p className="mt-5 text-2xl text-gray-500">
          During the day, I lead a team of 5 developers build analytics and
          accounting tools for Amazon sellers. At night, I build profitable
          internet businesses and share my love for software development to
          anyone who will listen.
        </p>
      </div>
    </div>
  );
}
