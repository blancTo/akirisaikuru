/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `広島不用品回収・東広島不用品回収・引越しゴミ・家財整理・ゴミ屋敷・遺品整理｜安芸リサイクル`,
    keyword:"広島,東広島,不用品回収,リサイクル家電買取,廃品回収,お片付け,遺品整理",
    description: `広島の不用品回収・引越しゴミ・お片付け・粗大ゴミ・お家丸ごと・遺品整理・秘密厳守・明朗会計・安心の定額パック・追加料金なし・買取から処分まで・年中無休・損害保険対応・クレジットカード対応・見積無料・遠方地域対応`,
    image: `/images/mobile_img.jpg`,
    url: `https://aki-risaikuru.com/`,
    siteUrl: `https://aki-risaikuru.com/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          quality: 75, //デフォルトは50
        },
      },
    },
    
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://aki-risaikuru.com/`,
      },
    },
    
    {
      resolve: `gatsby-transformer-remark`,
      options: {        
        plugins: [`gatsby-remark-responsive-iframe`],
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -100
      }
    },

    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: `https://aki-risaikuru.com`,
        sitemap: `https://aki-risaikuru.com/sitemap-0.xml`,
        policy: [{ userAgent: `*`, allow: `/` }],
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-sass`,
  ],
}
