import NextAuth from "next-auth/next";
import Auth0Provider from "next-auth/providers/auth0";

export default NextAuth({
    providers: [
        Auth0Provider({
            clientId: process.env.AUTH0_CLIENT_ID,
            clientSecret: process.env.AUTH0_CLIENT_SECRET,
            issuer: process.env.AUTH0_ISSUER_BASE_URL,
            // authorization: { params: { scope: 'openid guilds' } },
        }),
        
    ],
    callbacks: {
        session: ({ session, user, token }) => {
            session.user.id = token.sub
            return session
        }
      },
    
    pages: {
        signIn: '/signin',
      }
})