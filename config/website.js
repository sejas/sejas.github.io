const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Antonio Sejas | Remote Software Engineer and Machine Learning Enthusiast', // Navigation and Site Title
  siteTitleAlt: 'Sejas', // Alternative Site title for SEO
  siteTitleShort: 'Sejas', // short_name for manifest
  siteHeadline: 'Developing Mobile Apps from scratch.', // Headline for schema.org JSONLD
  siteUrl: 'https://sejas.github.io/', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: '',
  author: 'Sejas', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@antoniosejas', // Twitter Username
  ogSiteName: 'sejas', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language
  googleAnalyticsID: '',

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
