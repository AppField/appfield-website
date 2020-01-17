import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'

const AboutPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h2>Contact</h2>
      <p>Feel free to contact meh</p>
      <p>
        Find me on{' '}
        <a href="https://www.twitter.com/Remoslados" target="_blank">
          Twitter
        </a>
      </p>
    </Layout>
  )
}

export default AboutPage
