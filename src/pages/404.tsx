import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'

const NotFound = () => {
  return (
    <Layout>
      <h2>Page not found</h2>
      <p>
        <Link to="/">Go to home</Link>
      </p>
    </Layout>
  )
}

export default NotFound
