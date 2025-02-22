declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production" | "test";
      PORT: string;
      TZ: string;
      DATABASE_URL: string;
      NOTIFICATION: string;
      GOTIFY_TITLE: string;
      GOTIFY_URL: string;
      GOTIFY_TOKEN: string;
    }
  }
}

export {};
