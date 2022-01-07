import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import blogtonft from "../images/blogtonft.jpeg"
import deckoftux from "../images/deckoftux.png"
import bitcoin_at_glance from "../images/bitcoin_at_glance.png"
import home_automation_bex from "../images/home_automation_bex.png"
import chopcryptos from "../images/chopcryptos.png"
import headortails from "../images/headortails.png"
function Section2({ siteTitle }) {

    return (
        <div class="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
            <div class="absolute inset-0">
                <div class="bg-white h-1/3 sm:h-2/3"></div>
            </div>
            <div class="relative max-w-7xl mx-auto">
                <div class="text-center">
                    <h2 class="text-3xl tracking-tight font-light text-gray-900 sm:text-4xl">
                        My Awesomeness
                    </h2>
                    <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                        Find few of my best works below
                    </p>
                </div>
                <div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                    <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
                        <div class="flex-shrink-0">
                            <img class="h-48 w-full object-cover" src={deckoftux} alt="" />
                        </div>
                        <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                            <div class="flex-1">
                                <p class="text-sm font-medium text-indigo-600">
                                    <a href="#" class="hover:underline">
                                        Web 3.0
                                    </a>
                                </p>
                                <a href="#" class="block mt-2">
                                    <p class="text-xl font-semibold text-gray-900">
                                        Deck Of Tux
                                    </p>
                                    <p class="mt-3 text-base text-gray-500">
                                        Created an NFT Collections of 52 cards, which was generated using the concept of generative art.Different layers were created which were later superimposed onto each other using python code. Code was also responsible to maintain the rarity of the deck. Later all these images were minted into a NFT contract which is also availble at Opensea
                                    </p>
                                </a>
                            </div>
                            <div class="mt-6 flex  items-center">
                                <div class="flex gap-2">
                                   
                                    <span class="inline-flex items-center px-2 py-0.5 rounded-full text-sm font-medium bg-purple-200 text-purple-800">
                                        NFTs
                                    </span>
                                    <span class="inline-flex items-center px-2 py-0.5 rounded-full text-sm font-medium bg-purple-200 text-purple-800">
                                        React
                                    </span>
                                    <span class="inline-flex items-center px-2 py-0.5 rounded-full text-sm font-medium bg-purple-200 text-purple-800">
                                        Tailwind
                                    </span>
                                    
                                    
                                </div>

                            </div>
                            <div class="ml-1 mt-2">
                                <a href="https://deckoftuxnft.com/" target="_blank" class="inline-flex items-center justify-center px-4 py-2 text-base font-medium text-center text-indigo-100 border border-indigo-500 rounded-lg shadow-sm cursor-pointer hover:text-white bg-gradient-to-br from-purple-500 via-indigo-500 to-indigo-500">
                                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                    <span class="relative">View Project</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
                        <div class="flex-shrink-0">
                            <img class="h-48 w-full object-cover" src={blogtonft} alt="" />
                        </div>
                        <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                            <div class="flex-1">
                                <p class="text-sm font-medium text-indigo-600">
                                    <a href="#" class="hover:underline">
                                        Web 3.0
                                    </a>
                                </p>
                                <a href="#" class="block mt-2">
                                    <p class="text-xl font-semibold text-gray-900">
                                        BlogToNFT
                                    </p>
                                    <p class="mt-3 text-base text-gray-500">
                                        BlogToNFT is for all the writers/bloggers who wish to create their own NFT. At BlogToNFT a blogger/writer will have to prove their
                                        ownership and after adding details they can easily publish NFT straightaway into the Blockchain which is also visible on opensea.
                                        This project got featured as top 10 project of the day in <span className="text-indigo-600"> producthunt </span>
                                    </p>
                                </a>
                            </div>
                            <div class="mt-6 flex  items-center">
                                <div class="flex gap-2">
                                    <span class="inline-flex items-center px-2 py-0.5 rounded-full text-sm font-medium bg-purple-200 text-purple-800">
                                        Firebase
                                    </span>
                                    <span class="inline-flex items-center px-2 py-0.5 rounded-full text-sm font-medium bg-purple-200 text-purple-800">
                                        NFT
                                    </span>
                                    <span class="inline-flex items-center px-2 py-0.5 rounded-full text-sm font-medium bg-purple-200 text-purple-800">
                                        VueJS
                                    </span>
                                </div>

                            </div>
                            <div class="ml-1 mt-2">
                                <a href="https://blogtonft.com" target="_blank" class="inline-flex items-center justify-center px-4 py-2 text-base font-medium text-center text-indigo-100 border border-indigo-500 rounded-lg shadow-sm cursor-pointer hover:text-white bg-gradient-to-br from-purple-500 via-indigo-500 to-indigo-500">
                                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                    <span class="relative">View Project</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
                        <div class="flex-shrink-0">
                            <img class=" w-auto object-cover" src={headortails} alt="" />
                        </div>
                        <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                            <div class="flex-1">
                                <p class="text-sm font-medium text-indigo-600">
                                    <a href="#" class="hover:underline">
                                        Web 3.0
                                    </a>
                                </p>
                                <a href="#" class="block mt-2">
                                    <p class="text-xl font-semibold text-gray-900">
                                        Heads and Tails
                                    </p>
                                    <p class="mt-3 text-base text-gray-500">
                                       This is my first project completely written on solidity. It's a betting game where player can bet on the outcome of head and tails using crypto currencies, this game is still in development and yet to be released on mainnet
                                    </p>
                                </a>
                            </div>
                            <div class="mt-6 flex  items-center">
                                <div class="flex gap-2">
                                    <span class="inline-flex items-center px-2 py-0.5 rounded-full text-sm font-medium bg-purple-200 text-purple-800">
                                        solidity
                                    </span>
                                    <span class="inline-flex items-center px-2 py-0.5 rounded-full text-sm font-medium bg-purple-200 text-purple-800">
                                        react
                                    </span>
                                    <span class="inline-flex items-center px-2 py-0.5 rounded-full text-sm font-medium bg-purple-200 text-purple-800">
                                        tailwind
                                    </span>
                                </div>

                            </div>
                            <div class="ml-1 mt-2">
                                <a href="https://blogtonft.com" target="_blank" class="inline-flex items-center justify-center px-4 py-2 text-base font-medium text-center text-indigo-100 border border-indigo-500 rounded-lg shadow-sm cursor-pointer hover:text-white bg-gradient-to-br from-purple-500 via-indigo-500 to-indigo-500">
                                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                    <span class="relative">View Project</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
                        <div class="flex-shrink-0">
                            <img class="h-48 w-full object-cover" src={bitcoin_at_glance} alt="" />
                        </div>
                        <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                            <div class="flex-1">
                                <p class="text-sm font-medium text-indigo-600">
                                    <a href="#" class="hover:underline">
                                        Web 2.0
                                    </a>
                                </p>
                                <a href="#" class="block mt-2">
                                    <p class="text-xl font-semibold text-gray-900">
                                        Bitcoin At Glance
                                    </p>
                                    <p class="mt-3 text-base text-gray-500">
                                     It's bitcoin analytics dashboard which gives an indepth analysis of the bitcoin network in the form of graphs, metrics and tables. There is also a small utility where you can visualize the working of the blockchain by mining own block.
                                    </p>
                                </a>
                            </div>
                            <div class="mt-6 flex  items-center">
                                <div class="flex gap-2">
                                    <span class="inline-flex items-center px-2 py-0.5 rounded-full text-sm font-medium bg-purple-200 text-purple-800">
                                        Quasar
                                    </span>
                                    <span class="inline-flex items-center px-2 py-0.5 rounded-full text-sm font-medium bg-purple-200 text-purple-800">
                                        VueJS
                                    </span>
                                    <span class="inline-flex items-center px-2 py-0.5 rounded-full text-sm font-medium bg-purple-200 text-purple-800">
                                        Echarts
                                    </span>
                                </div>

                            </div>
                            <div class="ml-1 mt-2">
                                <a href="http://www.bitcoinatglance.com.s3-website.ap-south-1.amazonaws.com/#/" target="_blank" class="inline-flex items-center justify-center px-4 py-2 text-base font-medium text-center text-indigo-100 border border-indigo-500 rounded-lg shadow-sm cursor-pointer hover:text-white bg-gradient-to-br from-purple-500 via-indigo-500 to-indigo-500">
                                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                    <span class="relative">View Project</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
                        <div class="flex-shrink-0">
                            <img class="h-48 w-full object-cover" src={home_automation_bex} alt="" />
                        </div>
                        <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                            <div class="flex-1">
                                <p class="text-sm font-medium text-indigo-600">
                                    <a href="#" class="hover:underline">
                                        Web 2.0
                                    </a>
                                </p>
                                <a href="#" class="block mt-2">
                                    <p class="text-xl font-semibold text-gray-900">
                                        Home Automation Chrome Extension
                                    </p>
                                    <p class="mt-3 text-base text-gray-500">
                                    A big shoutout to this amazing framework, I have been using quasar since it's early days and build few amazing web application in my organisation.This is a chrome extension dashboard built using quasar and Vuejs
                                    </p>
                                </a>
                            </div>
                            <div class="mt-6 flex  items-center">
                                <div class="flex gap-2">
                                    <span class="inline-flex items-center px-2 py-0.5 rounded-full text-sm font-medium bg-purple-200 text-purple-800">
                                        Quasar
                                    </span>
                                    <span class="inline-flex items-center px-2 py-0.5 rounded-full text-sm font-medium bg-purple-200 text-purple-800">
                                        VueJS
                                    </span>
                                    <span class="inline-flex items-center px-2 py-0.5 rounded-full text-sm font-medium bg-purple-200 text-purple-800">
                                        Echarts
                                    </span>
                                </div>

                            </div>
                            <div class="ml-1 mt-2">
                                <a href="https://github.com/kartikpuri95/home_automation_bex" target="_blank" class="inline-flex items-center justify-center px-4 py-2 text-base font-medium text-center text-indigo-100 border border-indigo-500 rounded-lg shadow-sm cursor-pointer hover:text-white bg-gradient-to-br from-purple-500 via-indigo-500 to-indigo-500">
                                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                    <span class="relative">View Project</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
                        <div class="flex-shrink-0">
                            <img class="h-48 w-full object-cover" src={chopcryptos} alt="" />
                        </div>
                        <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                            <div class="flex-1">
                                <p class="text-sm font-medium text-indigo-600">
                                    <a href="#" class="hover:underline">
                                        Web 2.0
                                    </a>
                                </p>
                                <a href="#" class="block mt-2">
                                    <p class="text-xl font-semibold text-gray-900">
                                    chopcryptos
                                    </p>
                                    <p class="mt-3 text-base text-gray-500">
                                    With the rise of cryptocurrency across the globe, we have seen an unprecedented demand boom across India as well. Multiple cryptos exchanges have started adopting numbers of tokens and coins and with so much information at disposal, it becomes sometimes difficult to find the availability of tokens at any given exchange.

                                    </p>
                                </a>
                            </div>
                            <div class="mt-6 flex  items-center">
                                <div class="flex gap-2">
                                    <span class="inline-flex items-center px-2 py-0.5 rounded-full text-sm font-medium bg-purple-200 text-purple-800">
                                        Firebase
                                    </span>
                                    <span class="inline-flex items-center px-2 py-0.5 rounded-full text-sm font-medium bg-purple-200 text-purple-800">
                                        VueJS
                                    </span>
                                    <span class="inline-flex items-center px-2 py-0.5 rounded-full text-sm font-medium bg-purple-200 text-purple-800">
                                        Express JS
                                    </span>
                                </div>

                            </div>
                            <div class="ml-1 mt-2">
                                <a href="https://github.com/kartikpuri95/chopcryptos" target="_blank" class="inline-flex items-center justify-center px-4 py-2 text-base font-medium text-center text-indigo-100 border border-indigo-500 rounded-lg shadow-sm cursor-pointer hover:text-white bg-gradient-to-br from-purple-500 via-indigo-500 to-indigo-500">
                                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                    <span class="relative">View Project</span>
                                </a>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}
export default Section2
