import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import {
  documentToReactComponents,
  Options,
} from '@contentful/rich-text-react-renderer'

export const query = graphql`
  query($slug: String) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        json
      }
    }
  }
`

const Blog = (props: any) => {
  const options = {
    renderNode: {
      'embedded-asset-block': node => {
        const alt = node.data.target.fields.title['en-US']
        const url = node.data.target.fields.file['en-US'].url
        return <img alt={alt} src={url} />
      },
    },
  } as Options

  return (
    <Layout>
      <h2>{props.data.contentfulBlogPost.title}</h2>
      <em>{props.data.contentfulBlogPost.publishedDate}</em>

      {documentToReactComponents(
        props.data.contentfulBlogPost.body.json,
        options
      )}
    </Layout>
  )
}

export default Blog
