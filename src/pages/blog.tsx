import React from 'react'
import Layout from '../components/layout'
import { useStaticQuery, graphql, Link } from 'gatsby'

import blogStyles from './blog.module.scss'

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            id
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <h2>Blog</h2>
      <ol className={blogStyles.posts}>
        {data.allContentfulBlogPost.edges.map((edge: any) => {
          return (
            <li key={edge.node.id} className={blogStyles.post}>
              <Link to={`/blog/${edge.node.slug}`}>
                <h3>{edge.node.title}</h3>
                <p>{edge.node.publishedDate}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
