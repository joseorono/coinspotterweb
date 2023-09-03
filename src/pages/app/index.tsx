import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import { redirect } from 'next/navigation'

// This index page is used to redirect to the Dashboard page
// https://nextjs.org/docs/messages/middleware-relative-urls
// The recommended way is to clone NextURL and mutate it:

export default async function IndexApp() {
    // This is an App Router-only feature. I'll created a config-level redirect instead
    //redirect('/app/dashboard'); // The second argument is 'replace' by default
    return (
        <div>
            <h1>Redirecting....</h1>
            <p>
                This page redirects to the Dashboard page.
            </p>
        </div>

    )
}

/*
export function IndexApp(request: NextRequest) {
    const url = request.nextUrl.clone()
    url.pathname = '/dashboard'
    return NextResponse.rewrite(url)
}
*/