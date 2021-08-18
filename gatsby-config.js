/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Portfolio',
    author: 'Richard Taylor',
    titleTemplate: "%s · My Portfolio",
    description: "My web development portfolio to showcase projects I've built.",
    url: "https://zen-euler-594146.netlify.app", // No trailing slash allowed!
    image: "https://github.com/web-development2017/my_portfolio/blob/master/static/myProfileImage.jpeg",
    twitterUsername: "@occlumency"

    // bsminjs: '"src": "https://stackpath.bootstrapcdn.com/bootstrap/4.5.1/js/bootstrap.min.js", "type": "text/javascript", "defer": "true"',
    // jquery: '"src": "https://code.jquery.com/jquery-3.5.1.slim.min.js", "type": "text/javascript"',
  },
  plugins: [
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    `gatsby-plugin-react-helmet`,
    {
        resolve: 'gatsby-source-filesystem',
        options: {
            name: 'project',
            path: './data'
        }
    },
    'gatsby-transformer-json'
  ]
}
