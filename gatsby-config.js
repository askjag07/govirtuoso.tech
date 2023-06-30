/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: 'https://govirtuoso.tech',
    title: 'Go Virtuoso!',
    author: '@askjag07',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-purgecss',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        defaults: {
          placeholder: 'blurred',
        },
      },
    },
    {
      resolve: 'gatsby-plugin-gatsby-cloud',
      options: {
        headers: {
          '/sw.js': ['cache-control: public, no-cache'],
          '/index.html': ['cache-control: public, no-cache'],
          '/404.html': ['cache-control: public, no-cache'],
          '/*/index.html': ['cache-control: public, no-cache'],
          '/page-data/app-data.json': ['cache-control: public, no-cache'],
          '/page-data/*/page-data.json': ['cache-control: public, no-cache'],
          '/*.js': ['cache-control: public, max-age=31536000, immutable'],
          '/*.css': ['cache-control: public, max-age=31536000, immutable'],
          '/*.png': ['cache-control: public, max-age=31536000, immutable'],
        },
        allPageHeaders: [
          'Referrer-Policy: no-referrer-when-downgrade, always',
          'Strict-Transport-Security: max-age=31536000, includeSubDomains, preload',
          'X-Content-Type-Options: nosniff, always',
          'X-Frame-Options: SAMEORIGIN, always',
          'X-Robots-Tag: all',
          'X-XSS-Protection: 1, mode=block, always',
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        output: '/',
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://govirtuoso.tech',
        sitemap: [
          'https://govirtuoso.tech/sitemap-0.xml',
          'https://govirtuoso.tech/sitemap-index.xml',
        ],
        policy: [{ userAgent: '*', allow: '/' }],
        output: '/robots.txt',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Go Virtuoso!',
        short_name: 'Virtuoso',
        lang: 'en',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#0d6efd',
        display: 'standalone',
        icon: './src/images/icon.png',
        cache_busting_mode: 'name',
        icon_options: {
          purpose: 'any maskable',
        },
      },
    },
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        workboxConfig: {
          globPatterns: ['./icons/icon*'],
        },
      },
    },
  ],
}
