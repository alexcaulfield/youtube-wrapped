module.exports = {
  siteMetadata: {
    title: `Alex Caulfield`,
    description: `YouTube Wrapped`,
    author: `Alex Caulfield <alex@alexcaulfield.com>`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
          isTSX: true, // defaults to false
          jsxPragma: `jsx`, // defaults to "React"
          allExtensions: true, // defaults to false
      },
    },
    `gatsby-theme-material-ui`
  ]
}