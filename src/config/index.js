export default {
  meta: {
    twitter: '@vianhanif',
    title: {
      default: 'SSR Web App',
      separator: ' | '
    },
    description: 'Here is a pretty awesome meta tag description for my website.',
  },
  url: {
    default: process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://cra-ssr.herokuapp.com'
  }
}
