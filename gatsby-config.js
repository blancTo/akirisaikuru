/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `広島不用品回収・東広島不用品回収・引越しゴミ・家財整理・ゴミ屋敷・遺品整理｜安芸リサイクル`,
    keyword: '広島,東広島,不用品回収,リサイクル家電買取,廃品回収,お片付け,遺品整理',
    description: `広島の不用品回収・引越しゴミ・お片付け・粗大ゴミ・お家丸ごと・遺品整理・秘密厳守・明朗会計・安心の定額パック・追加料金なし・買取から処分まで・年中無休・損害保険対応・クレジットカード対応・見積無料・遠方地域対応`,
    image: `/images/mobile_img.jpg`,
    url: `https://aki-risaikuru.com`,
    siteUrl: `https://aki-risaikuru.com`,
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
        siteUrl: `https://aki-risaikuru.com`,
      },
    },

    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-responsive-iframe`],
      },
    },
    {
      resolve: 'gatsby-plugin-anchor-links',
      options: {
        offset: -100,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        entryLimit: 50000,
        resolveSiteUrl: () => 'https://aki-risaikuru.com',
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: `https://aki-risaikuru.com`,
        sitemap: `https://aki-risaikuru.com/sitemap-index.xml`,
        policy: [{ userAgent: `*`, allow: `/` }],
      },
    },
    {
      resolve: "gatsby-plugin-htaccess",
      options: {
        RewriteBase: "/",
        https: true,
        www: false,
        SymLinksIfOwnerMatch: true,
        host: "aki-risaikuru.com",
        ErrorDocument: `          
          ErrorDocument 404 /error_pages/404.html
        `,
        RewriteRules: `
          RewriteCond %{HTTPS} off [OR]
          RewriteCond %{HTTP_HOST} ^www\. [NC]
          RewriteCond %{HTTP_HOST} ^(?:www\.)?(.+)$ [NC]
          RewriteRule ^ https://%1%{REQUEST_URI} [L,NE,R=301]
        `,
        Redirect: [
          "RewriteRule ^index\\.html$ / [R=301,L,NE]",
          "RewriteRule ^(.*)/index\\.html$ /$1/ [R=301,L,NE]",
          "RewriteRule ^(company)\\.html$ /$1/ [R=301,L,NE]",
          "RewriteRule ^(service)\\.html$ /$1/ [R=301,L,NE]",
          "RewriteRule ^(service/ihin_seiri)\\.html$ /$1/ [R=301,L,NE]", // /service/ihin_seiri.htmlを/service/ihin_seiri/にリダイレクト
          "RewriteRule ^(service/hikkoshi_gomi)\\.html$ /$1/ [R=301,L,NE]",
          "RewriteRule ^(service/fuyouhin_kaisyu)\\.html$ /$1/ [R=301,L,NE]",
          "RewriteRule ^contact/$ /toiawase/ [R=301,L,NE]" // /contact/を/toiawase/にリダイレクト
        ],
        End: `
          RewriteCond %{REQUEST_URI} /+[^\\.]+$
          RewriteRule ^(.+[^/])$ %{REQUEST_URI}/ [R=301,L]
        `,
      },
    },
    `gatsby-plugin-sass`,

    {
      resolve: 'gatsby-source-microcms',
      options: {
        apiKey: process.env.API_KEY,
        serviceId: 'aki-risaikuru',
        apis: [
          {
            endpoint: 'posts',
          },
          {
            endpoint: 'category',
          },
        ],
      },
    },
  ],
};
