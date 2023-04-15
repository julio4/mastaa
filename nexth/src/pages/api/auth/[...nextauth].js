import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
  providers: [
    Providers.OpenID({
      id: 'worldcoin',
      name: 'World ID',
      issuer: 'https://id.worldcoin.org/',
      authorizationEndpoint: 'https://id.worldcoin.org/authorize',
      tokenEndpoint: 'https://id.worldcoin.org/token',
      userinfoEndpoint: 'https://id.worldcoin.org/userinfo',
      clientId: 'YOUR_CLIENT_ID',
      clientSecret: 'YOUR_CLIENT_SECRET',
      scope: 'openid profile email',
    }),
  ],
})