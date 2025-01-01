import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "../prisma";

export const nextAuthOptions: NextAuthOptions = {
    debug: true,
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID ?? "",
            clientSecret: process.env.GITHUB_SECRET ?? "",
        }),
    ],
    adapter: PrismaAdapter(prisma),
    // This is a custom callback that will be called when the user logs in
    // 認証フローのさまざまなステップで呼び出されるコールバック関数を提供します。
    callbacks: {
        session: ({ session, user }) => {
            return {
                ...session,
                user: {
                    ...session.user,
                    id: user.id,
                },
            }
        }
    },
    secret: process.env.NEXTAUTH_SECRET,
};