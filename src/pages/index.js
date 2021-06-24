import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'
import Contact from '../components/Contact'

import projBooks from '../assets/images/proj-books.png'
import favicon from '../assets/images/favicon-32x32.png'

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="Gem Kosan's Portfolio"
                    meta={[
                        { name: 'og:title', content: 'Gem Kosan\'s Portfolio' },
                        { name: 'og:site_name', content: 'Web Dev Gem' },
                        { name: 'og:description', content: 'I\'m a front-end developer with a focus on creating usable UIs with React.' },
                        { name: 'og:url', content: 'https://www.webdevgem.com' },
                        { name: 'og:image', content: 'https://www.webdevgem.com/static/banner.jpg' },
                        { name: 'twitter:image:alt', content: 'A man squatting on a rocky precipice with sky above and ocean below.' },
                        { name: 'twitter:card', content: 'summary_large_image' },
                    ]}
                    htmlAttributes={{
                        lang: 'en-US',
                    }}
                >
                    <link rel="icon" href={favicon} />
                </Helmet>

                <Banner />
                <Contact />

                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${projBooks})`}}>
                            <a href="https://gk-books.netlify.app/" className="link primary">
                                <header className="major">
                                    <h3>Book Search</h3>
                                    <p>A small project using Bootstrap 4, React and the Google Books API</p>
                                </header>
                            </a>
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