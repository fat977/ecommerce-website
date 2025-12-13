import { createServerClient } from '@supabase/ssr'

export async function updateSession(request) {
  const url = new URL(request.url);
  const pathname = url.pathname;

  // Check if the request is a Server Action
  const isServerAction =
    request.headers.get('RSC-Action') || request.headers.get('Next-Action');

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll() {},
      },
    }
  );

  const { data } = await supabase.auth.getUser();
  const user = data?.user;

  // If the user is logged in — prevent access to auth pages
  //  Key: added condition **AND !isServerAction**
  if (user && (pathname.startsWith('/auth/signin') || pathname.startsWith('/auth/signup')) && !isServerAction) {
    url.pathname = '/';
    return Response.redirect(url);
  }

  // If the user is not logged in — prevent access to checkout
  // Key: added condition **AND !isServerAction**
  if (!user && pathname.startsWith('/checkout') && !isServerAction) {
    url.pathname = '/auth/signin';
    return Response.redirect(url);
  }

  // ✔️ Core step: return null lets Next.js continue handling the request normally
  return null;
}
