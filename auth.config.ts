// auth.config.ts
import type { NextAuthConfig } from "next-auth";

export const authConfig: NextAuthConfig = {
    pages: {
        signIn: "/sign-in",
        error: "/sign-in",
    },
    callbacks: {
        authorized({ request, auth }) {
            // Protected routes regex patterns
            const protectedPaths = [
                /\/shipping-address/,
                /\/payment-method/,
                /\/place-order/,
                /\/profile/,
                /\/user\/(.*)/,
                /\/order\/(.*)/,
                /\/admin/,
            ];

            const { pathname } = request.nextUrl;

            // Require auth on protected paths
            if (!auth && protectedPaths.some((p) => p.test(pathname))) {
                return false;
            }

            // If authenticated or route not protected → allow
            return true;
        },
    },
    providers: []
};
