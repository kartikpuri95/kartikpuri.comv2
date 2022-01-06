import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import section1 from "../images/section1.gif"
function Section1({ siteTitle }) {

  return (
    <div class="py-16 bg-gray-50 overflow-hidden lg:py-12">
    <div class="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
      <svg class="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4" width="404" height="784" fill="none" viewBox="0 0 404 784" aria-hidden="true">
        <defs>
          <pattern id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="404" height="784" fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)" />
      </svg>
  
  
      <div class="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
        <div class="relative">
          <h3 class="text-2xl font-light text-gray-900 tracking-tight sm:text-3xl">
           I am So Far
          </h3>
          <p class="mt-3 text-lg text-gray-500">
          Hi! My Name is Kartik and I am a Self-taught Full-stack developer who has been in the IT industry for around the last 4 years now, based at a consultancy company. I have been fortunate to be involved with building some massive IT systems, apps, and Software solutions. Over the past few years, I have served various industries including Healthcare, Fintech, Sales and Marketing, eCommerce, etc. You can always find me talking about the awesomeness of Cryptos and Blockchain while savouring over truffle ganache 😉          </p>
  
          <dl class="mt-10 space-y-10">
            <div class="relative">
              <dt>
                <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                
                  <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <p class="ml-16 text-lg leading-6 font-medium text-gray-900">Web 2.0</p>
              </dt>
              <dd class="mt-2 ml-16 grid grid-cols-6 gap-2 text-base text-gray-500">
                <span className="px-1 py-0 text-center text-xs rounded-md bg-gray-200 text-gray-700 shadow-sm">Python</span>
                <span className="px-1 py-0 text-center text-xs rounded-md bg-gray-200 text-gray-700 shadow-sm">Javascript</span>
                <span className="px-1 py-0 text-center text-xs rounded-md bg-gray-200 text-gray-700 shadow-sm">NodeJS</span>
                <span className="px-1 py-0 text-center text-xs rounded-md bg-gray-200 text-gray-700 shadow-sm">ExpressJS</span>
                <span className="px-1 py-0 text-center text-xs rounded-md bg-gray-200 text-gray-700 shadow-sm">Flask</span>
                <span className="px-1 py-0 text-center text-xs rounded-md bg-gray-200 text-gray-700 shadow-sm">ReactJS</span>
                <span className="px-1 py-0 text-center text-xs rounded-md bg-gray-200 text-gray-700 shadow-sm">VueJS</span>
                <span className="px-1 py-0 text-center text-xs rounded-md bg-gray-200 text-gray-700 shadow-sm">Echarts</span>
                <span className="px-1 py-0 text-center text-xs rounded-md bg-gray-200 text-gray-700 shadow-sm">tailwindui</span>
                <span className="px-1 py-0 text-center text-xs rounded-md bg-gray-200 text-gray-700 shadow-sm">Quasar</span>
              </dd>
            </div>
  
            <div class="relative">
              <dt>
                <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
            
                  <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
                <p class="ml-16 text-lg leading-6 font-medium text-gray-900">Web 3.0</p>
              </dt>
              <dd class="mt-2 ml-16 grid grid-cols-6 gap-2 text-base text-gray-500">
                <span className="px-1 py-0 text-center text-xs rounded-md bg-gray-200 text-gray-700 shadow-sm">Crypto</span>
                <span className="px-1 py-0 text-center text-xs rounded-md bg-gray-200 text-gray-700 shadow-sm">NFT's</span>
                <span className="px-1 py-0 text-center text-xs rounded-md bg-gray-200 text-gray-700 shadow-sm">Solidity</span>
                <span className="px-1 py-0 text-center text-xs rounded-md bg-gray-200 text-gray-700 shadow-sm">Blockchain</span>
              </dd>
            </div>
  
    
          </dl>
        </div>
  
        <div class="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
          <svg class="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden" width="784" height="404" fill="none" viewBox="0 0 784 404">
            <defs>
              <pattern id="ca9667ae-9f92-4be7-abcb-9e3d727f2941" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="784" height="404" fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)" />
          </svg>
          <img
          class="  w-80 h-auto mx-auto "
            src={section1}
            alt="gatsby astronaut"
          />
        </div>
      </div>
  
  
      
    </div>
  </div>
  )
}
export default Section1
