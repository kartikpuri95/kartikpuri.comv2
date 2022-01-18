import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import section1 from "../images/section1.gif"
import BlogCard from "../components/blog/blog-card"
import { graphql,useStaticQuery } from "gatsby"

const Section3 = ({data}) => {
     const data_blog = useStaticQuery(graphql`
query MyQuery {
    allDevblogPost {
      edges {
        node {
          brief
          contentMarkdown
          coverImage
          cuid
          dateAdded
          dateUpdated
          slug
          title
          type
         
          id
        }
      }
    }
  }
`)
    let blog_data = data_blog.allDevblogPost.edges
   return( <div class="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
    <div class="absolute inset-0">
    {console.log(data)}
      <div class="bg-white h-1/3 sm:h-2/3"></div>
    </div>
    <div class="relative max-w-7xl mx-auto">
      <div class="text-center">
        <h2 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
          My writings
        </h2>
        <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
          {/* Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed. */}
        </p>
      </div>
      <div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
       
       {
           blog_data.map((item)=>{
               let new_date=new Date(item.node.dateAdded)
               new_date = new_date.toDateString()
            return(
                <BlogCard 
                title={item.node.title}
                brief={item.node.brief} 
                img_url={item.node.coverImage} 
                type={item.node.type}
                slug={item.node.slug} 
                blog_date={new_date}/>
            )
           })
       }
       
  
    
      </div>
    </div>
  </div>
   )
}

export default Section3
