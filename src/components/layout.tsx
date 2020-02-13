import React from 'react'
import Header from './header'
import Footer from './footer'
import '../styles/index.scss'

import layoutStyles from './layout.module.scss'

const Layout = (props: { children: React.ReactNode }) => {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.headerContainer}>
        <div className={layoutStyles.headerContent}>
          <Header></Header>
        </div>
      </div>

      <main className={layoutStyles.mainContainer}>
        <section className={layoutStyles.content}>{props.children}</section>

        <Footer />
      </main>
    </div>
  )
}

export default Layout
