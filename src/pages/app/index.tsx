/*
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import { redirect } from 'next/navigation'
*/

import AppLayout from "~/components/layout/AppLayout"

// This index page is used to redirect to the Dashboard page
// https://nextjs.org/docs/messages/middleware-relative-urls
// The recommended way is to clone NextURL and mutate it:

export default function IndexApp() {
    // This is an App Router-only feature. I'll created a config-level redirect instead
    //redirect('/app/dashboard'); // The second argument is 'replace' by default
    return (
        <>
        <AppLayout pageTitle="Redirecting">
            <div className="text-center">
                <h1>Redireccionando....</h1>
                <p>
                    Esta página redirije al Dashboard.
                </p>
            </div>
        </AppLayout>
        </>
    )
}

/*
export function IndexApp(request: NextRequest) {
    const url = request.nextUrl.clone()
    url.pathname = '/dashboard'
    return NextResponse.rewrite(url)
}
*/