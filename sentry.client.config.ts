import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://9b8729618bd4661a3a799cc612c00eaa@o4507509468364800.ingest.de.sentry.io/4507509476556880",
  tracesSampleRate: 1,
  debug: false,
  replaysOnErrorSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,
  integrations: [
    Sentry.replayIntegration({
      maskAllText: true,
      blockAllMedia: true,
    }),
    // Temporarily disable feedbackIntegration to check for issues
    // Sentry.feedbackIntegration({
    //   colorScheme: "system",
    // }),
  ],
});
