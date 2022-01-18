import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import logo from "../../images/logo.png"
function BlogCard({ title, brief,img_url,type,blog_date,slug}) {

  return (
      <a href={`https://chopcoding.com/${slug}`} target="_blank">
    <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
    <div class="flex-shrink-0">
      <img class="h-48 w-full object-cover" src={img_url} alt=""/>
    </div>
    <div class="flex-1 bg-white p-6 flex flex-col justify-between">
      <div class="flex-1">
        <p class="text-sm font-medium text-indigo-600">
          <a href={`https://chopcoding.com/${slug}`} class="hover:underline">
            {type}
          </a>
        </p>
        <a href={`https://chopcoding.com/${slug}`}  target="_blank" class="block mt-2">
          <p class="text-xl font-semibold text-gray-900">
          {  title}
          </p>
          <p class="mt-3 text-base text-gray-500">
            {brief}
          </p>
        </a>
      </div>
      <div class="mt-6 flex items-center">
        <div class="flex-shrink-0">
          <a href={`https://chopcoding.com/${slug}`}  target="_blank">
            <span class="sr-only">Kartik Puri</span>
            <span class="h-10 w-10 rounded-full"  alt="">K</span>
          </a>
        </div>
        <div class="ml-3">
          <p class="text-sm font-medium text-gray-900">
            <a href={`https://chopcoding.com/${slug}`}  target="_blank" class="hover:underline">
              Kartik Puri
            </a>
          </p>
          <div class="flex space-x-1 text-sm text-gray-500">
            <time datetime="2020-03-16">
             {blog_date}
            </time>
            <span aria-hidden="true">
              &middot;
            </span>
            {/* <span>
              6 min read
            </span> */}
          </div>
        </div>
      </div>
    </div>
  </div>
  </a>
  )
}
export default BlogCard
