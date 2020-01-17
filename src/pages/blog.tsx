import React from 'react'
import Layout from '../components/layout'
import { useStaticQuery, graphql } from 'gatsby'

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              title
              date
            }
            excerpt
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <h2>Blog</h2>
      {data.allMarkdownRemark.edges.map((edge: any) => {
        return (
          <div key={edge.node.id}>
            <h1>{edge.node.frontmatter.title} </h1>
            <em>{edge.node.frontmatter.date}</em>
            <p>{edge.node.excerpt}...</p>
          </div>
        )
      })}
    </Layout>
  )
}

export default BlogPage
