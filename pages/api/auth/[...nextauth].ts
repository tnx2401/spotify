import NextAuth, { type NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

// Uncomment and add your preferred provider:
// import GoogleProvider from "next-auth/providers/google"
// import GitHubProvider from "next-auth/providers/github"

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // TODO: Replace with your own user validation logic
        // Example: query your database to verify credentials
        if (credentials?.email === "demo@example.com" && credentials?.password === "password") {
          return {
            id: "1",
            name: "Demo User",
            email: credentials.email,
            address: "123 Main Street",
          }
        }
        return null
      },
    }),
    // Example Google Provider (uncomment and add env vars):
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID || "",
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    // }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        //eslint-disable-next-line @typescript-eslint/no-explicit-any
        token.address = (user as any).address
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.address = token.address as string
      }
      return session
    },
  },
}

export default NextAuth(authOptions)