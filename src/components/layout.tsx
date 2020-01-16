import React from "react"
import Header from "./header"
import Footer from "./footer"
import "../styles/index.css"

const Layout = (props: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <section>{props.children}</section>
      <Footer />
    </div>
  )
}

export default Layout
