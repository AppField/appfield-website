import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <Layout>
      <h2>About</h2>
      <h2>I'm Roman, a frontend developer living in Vienna</h2>
      <p>
        <Link to="/contact">Contact me</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
