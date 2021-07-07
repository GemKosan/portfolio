module.exports = {
  siteMetadata: {
    url: "https://www.webdevgem.com",
    title: "Gem Kosan's Portfolio",
    author: "Gem Kosan",
    description: "I'm a frontend developer with a focus on creating usable UIs with React. I develop web pages using modern technologies like JavaScript, React, HTML5, and CSS3.",
    keywords: ["portfolio", "frontend", "web", "development", "react", "JavaScript", "gatsby"],
    twitter: "",
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/favicon-32x32.png', // This path is relative to the root of the site.
      },
    },
    '@bradgarropy/gatsby-plugin-seo',
    'gatsby-plugin-sass',
    // 'gatsby-plugin-offline',
  ],
}
