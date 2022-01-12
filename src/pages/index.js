import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ReactTypingEffect from 'react-typing-effect';
import Section1 from '../components/section1'
import Section2 from '../components/section2'
import linkedin from '../images/linkedin.png'
import twitter from '../images/twitter.png'
import github from '../images/github.png'
import hashnode from '../images/hashnode.png'
import { graphql } from "gatsby"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <div class="relative bg-gray-50">
    <main class="mt-16 sm:mt-24">
      <div class="mx-auto max-w-7xl">
        <div class="lg:grid lg:grid-cols-12 lg:gap-8">
          <div class="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
            <div>
           
              <h1 class="mt-4 text-4xl tracking-wider text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl">
       
                <span class="md:block text-transparent bg-clip-text font-medium		 bg-gradient-to-r from-gray-700 via-gray-900 to-black"> 
                <ReactTypingEffect
                speed="200"
                eraseSpeed="200"
                eraseDelay="200"
                typingDelay="300"
        text={["नमस्ते","Hola","Hello!", "Bonjour!"]}
      />, My Self
           
                </span>
                <span class=" md:block text-transparent font-light tracking-widest	mt-4 text-indigo-600">Kartik Puri</span>
              </h1>
              <p class="mt-3 text-base  sm:mt-5 sm:text-xl lg:text-lg xl:text-xl text-gray-700">
              I am Fullstack developer love talking about Development, Web3, Crypto and building products
                </p>
              <div class="mt-5 w-full sm:mx-auto sm:max-w-lg lg:ml-0">
                <div class="flex w-40 flex-wrap items-start justify-between">
                  <div class="flex justify-center px-1">
                    <a href="https://www.linkedin.com/in/kartikchop/" target="_blank"><img class="h-6 sm:h-6" src={linkedin} alt="LinkedIn"/></a>
                  </div>
                  <div class="flex justify-center px-1">
                  <a href="https://twitter.com/chopcoding" target="_blank"><img class="h-6 sm:h-6" src={twitter} alt="twitter"/></a>
                  </div>
                  <div class="flex justify-center px-1">
                  <a  href="https://github.com/kartikpuri95" target="_blank"> <img class="h-6 sm:h-6" src={github} alt="github"/></a>
                  </div>
                  <div class="flex justify-center px-1">
                  <a  href="https://chopcoding.com" target="_blank"> <img class="h-6 sm:h-6" src={hashnode} alt="hashnode"/></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6">
            <div class="flex  p-8 items-center sm:max-w-md sm:w-full mx-auto sm:mx-auto sm:rounded-lg sm:overflow-hidden">
             
              <StaticImage
          class="  w-40 h-auto mx-auto "
            src="../images/logo.png"
            alt="gatsby astronaut"
          />
              
            </div>
          </div>
        </div>
      </div>
    </main>
  <Section1></Section1>
  <Section2></Section2>
    </div>
    {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <StaticImage
        src="../images/gatsby-astronaut.png"
        alt="gatsby astronaut"
      />
    </div>
    <p><Link to="/page-2/">Go to page 2</Link></p>
    <p><Link to="/using-typescript/">Go to "Using TypeScript"</Link></p> */}
  </Layout>
)

export default IndexPage
// export const pageQuery = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
//       nodes {
//         excerpt
//         fields {
//           slug
//         }
//         frontmatter {
//           date(formatString: "MMMM DD, YYYY")
//           title
//           description
//         }
//       }
//     }
//   }
// `