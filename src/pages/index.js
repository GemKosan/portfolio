import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/pic01.jpg'
import favicon from '../assets/images/favicon.ico'

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="Gem Kosan's Portfolio"
                    meta={[
                        { name: 'description', content: 'Sample' },
                        { name: 'keywords', content: 'sample, something' },
                    ]}
                >
                    <link rel="icon" href={favicon} />
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${pic01})`}}>
                            <header className="major">
                                <h3>Book Search</h3>
                                <p>A small project using Bootstrap 4, React and the Google Books API</p>
                            </header>
                            <Link to="https://gk-books.netlify.app/" className="link primary"></Link>
                        </article>
                        <article>
                            <header className="major">
                                <p>More to come...</p>
                            </header>
                        </article>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex