import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";

const nextIntlMiddleware = createMiddleware({
    locales: ["en", "es"],
    defaultLocale: "en"
})

export default function (req: NextRequest): NextResponse {
    return nextIntlMiddleware(req)
}

export const config = {
    matcher: ['/', '/(es|en)/:path*']
}