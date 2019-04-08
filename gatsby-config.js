module.exports = {
  siteMetadata: {
    title: `Laura Stout`,
    author: `Laura Stout`,
    description: `You are here because it was inevitable! I'm Laura, an easy-going, Dutch-Brazillian animator. I’m inspired by the introspective, mystic places, expressive characters and imaginative music. I love exploring and experimenting With different styles and techniques.`,
    siteUrl: `https://laurastout.com/`,
    social: {
      twitter: `TODO`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/portfolio/`,
        name: `portfolio`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Laura Stout Portfolio`,
        short_name: `Laura Stout Portfolio`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffd6d6`,
        display: `minimal-ui`,
        icon: `static/assets/lauraicon.png`,
      },
    },
    `gatsby-plugin-remove-serviceworker`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-netlify-cms`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: [
            "Reem Kufi:400",
            "Montserrat:400",
            "Montserrat:300:italic",
            "Arial",
            "sans-serif",
          ],
        },
      },
    },
  ],
}
