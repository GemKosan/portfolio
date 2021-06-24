import React from 'react'
import Helmet from 'react-helmet'
import favicon from '../assets/images/favicon-32x32.png'

const NotFoundPage = () => (
  <>
    <Helmet htmlAttributes={{
      lang: 'en-US',
    }}>
            <title>Page not found</title>
            <meta name="description" content="404 - page missing" />
            <link rel="icon" href={favicon} />
        </Helmet>
    <div id="main" className="alt">
        <section id="one">
            <div className="inner">
                <h1>NOT FOUND</h1>
                <p>You just hit a route that doesn&#39;t exist...</p>
            </div>
        </section>
    </div>
  </>
)

export default NotFoundPage
