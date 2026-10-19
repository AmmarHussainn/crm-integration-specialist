import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingSection from "@/components/BookingSection";
import LeadMagnet from "@/components/LeadMagnet";
import { ArrowLeft, Clock, AlertTriangle, CheckCircle2, ShieldAlert } from "lucide-react";

export const metadata = {
  title: "How to Fix Clio API v4 OAuth 2.0 Token Refresh & 429 Errors",
  description:
    "A developer guide to solving OAuth 2.0 token expiration, clock skew, and 429 rate limit errors when integrating custom apps with Clio Manage REST API v4.",
  alternates: {
    canonical: "https://www.crmintegrationspecialist.com/blog/clio-api-oauth-errors",
  },
  openGraph: {
    title: "How to Fix Clio API v4 OAuth 2.0 Token Refresh & 429 Errors",
    description: "Debugging Clio API v4 OAuth 2.0 refresh loops and rate limiting for legal software developers.",
    url: "https://www.crmintegrationspecialist.com/blog/clio-api-oauth-errors",
    siteName: "CRM Integration Specialists",
    type: "article",
  },
};

export default function ClioApiOauthErrorsPost() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-ink text-text">
      <Navbar />

      <article className="relative px-4 pb-20 pt-36 sm:pt-44">
        <div className="mx-auto max-w-3xl">
          <a
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-cyan transition-colors"
          >
            <ArrowLeft size={14} />
            Back to Guides & Articles
          </a>

          <div className="mt-6 flex items-center gap-3 text-xs text-muted">
            <span className="rounded-full border border-brass/40 bg-brass/10 px-2.5 py-0.5 text-brass font-mono">
              API Engineering
            </span>
            <span className="flex items-center gap-1">
              <Clock size={12} /> 5 min read
            </span>
          </div>

          <h1 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
            How to Fix Clio API v4 OAuth 2.0 Token Refresh & 429 Errors
          </h1>

          <p className="mt-4 text-base text-muted leading-relaxed sm:text-lg">
            Clio&rsquo;s REST API v4 requires strict OAuth 2.0 refresh mechanics. Here is how to prevent sudden authentication disconnects and rate limit drops in production.
          </p>

          <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted sm:text-base border-t border-border pt-8">
            <div>
              <h2 className="font-display text-xl font-semibold text-text sm:text-2xl">
                Why Clio Tokens Expire and Break Integrations
              </h2>
              <p className="mt-3">
                Clio issues access tokens that expire after a specific TTL. While access tokens can be refreshed using a persistent <code>refresh_token</code>, Clio invalidates the previous refresh token as soon as a new one is issued (token rotation).
              </p>
              <p className="mt-3">
                If two simultaneous webhooks fire while a token refresh is underway, a race condition occurs: the second webhook uses the old refresh token, receives an <code>invalid_grant</code> error, and the entire integration goes offline until manual re-authentication.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-surface/70 p-6">
              <h3 className="font-display text-base font-semibold text-text flex items-center gap-2">
                <ShieldAlert size={18} className="text-cyan" />
                The Solution: Mutex-Locked Token Store
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-muted">
                To prevent race conditions, implement a distributed Redis lock (mutex) around the token refresh function:
              </p>
              <ol className="mt-4 space-y-2 text-xs sm:text-sm list-decimal list-inside text-text">
                <li>Acquire a lock key <code>lock:clio:token_refresh</code> for 5 seconds.</li>
                <li>Verify if another process refreshed the token in the last 60 seconds before executing the POST request.</li>
                <li>Exchange <code>refresh_token</code> at <code>https://app.clio.com/oauth/token</code>.</li>
                <li>Persist the new token pair atomically to Redis / PostgreSQL.</li>
                <li>Release the lock so pending webhooks proceed with the newly minted access token.</li>
              </ol>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-text sm:text-2xl">
                Taming 429 Too Many Requests
              </h2>
              <p className="mt-3">
                Clio Manage applies rate limits across an entire account. If multiple third-party tools make concurrent requests, your custom webhook might be throttled.
              </p>
              <p className="mt-3">
                Inspect the <code>Retry-After</code> and <code>X-RateLimit-Remaining</code> headers in Clio API responses. Our <a href="/ghl-clio-integration" className="text-cyan underline">GoHighLevel to Clio integration bridge</a> automatically sleeps the worker thread according to <code>Retry-After</code> before retrying, ensuring 100% data transmission with zero 429 drops.
              </p>
            </div>
          </div>
        </div>
      </article>

      <LeadMagnet />
      <BookingSection />
      <Footer />
    </main>
  );
}
