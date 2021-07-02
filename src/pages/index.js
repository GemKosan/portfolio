import React from 'react'
import SEO from "@bradgarropy/gatsby-plugin-seo"
import Layout from '../components/layout'
import Banner from '../components/Banner'
import Contact from '../components/Contact'
import Gallery from '../components/Gallery'

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <SEO />
                <Banner />
                <Gallery />
                <Contact />
            </Layout>
        )
    }
}

export default HomeIndex