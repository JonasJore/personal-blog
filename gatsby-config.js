module.exports = {
  siteMetadata: {
    title: `Personal Blog`,
    author: {
      name: `Jonas Jore`,
      summary: `Developer working and living in Oslo, Norway`,
    },
    description: `A personal blog built using Gatsby for educational purposes.`,
    siteUrl: `https://github.com/JonasJore/personal-blog`,
    social: {
      twitter: `JonasJore`,
      instagram: `jore_irl`,
    },
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-ts-loader',
      options: {
        tslint: false,
      },
    },
    `gatsby-plugin-sass`,
  ],
}
