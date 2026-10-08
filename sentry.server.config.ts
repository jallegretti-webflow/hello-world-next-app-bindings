import * as Sentry from "@sentry/nextjs";

/**
 * Server-side Sentry initialization (Node runtime), default transport.
 *
 * TEST FIXTURE (CLOUD-168): this branch deliberately omits the fetch-based
 * transport override that `feat/sentry-integration-example` uses. The default
 * Node transport sends events with `https.request`, which workerd only
 * provides at compatibility_date >= 2025-08-16. On an older date server-side
 * events are dropped silently (build, deploy and requests all succeed), so
 * this app is a reproduction of the bug and a check of the platform fix.
 */
Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,

  // Demo settings: capture everything. Lower these in a real app.
  tracesSampleRate: 1.0,

  // Send Sentry structured logs (Sentry.logger.*) from the server.
  enableLogs: true,

  debug: false,
});
