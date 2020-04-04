module.exports = {
  plugins: [
    {
      resolve: "gatsby-plugin-ts-loader",
      options: {
        tslint: false
      }
    },
    `gatsby-plugin-sass`
  ]
}
