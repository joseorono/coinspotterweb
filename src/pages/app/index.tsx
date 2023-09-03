import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

// This index page is used to redirect to the Dashboard page
// https://nextjs.org/docs/messages/middleware-relative-urls
// The recommended way is to clone NextURL and mutate it:
/*
export default async function IndexApp() {
    redirect('/hello-nextjs', 'replace');
  
}
*/
export function IndexApp(request: NextRequest) {
    const url = request.nextUrl.clone()
    url.pathname = '/dashboard'
    return NextResponse.rewrite(url)
}