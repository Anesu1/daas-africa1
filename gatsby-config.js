module.exports = {
  siteMetadata: {
    siteUrl: "http://localhost/daas",
    title: "Daas-Africa",
  },
  plugins: ["gatsby-plugin-gatsby-cloud",
            {
              resolve: "gatsby-source-filesystem",
              options: {
                name: `blog`,
                path: `${__dirname}/blog`,
              }
            },
          ],

};
