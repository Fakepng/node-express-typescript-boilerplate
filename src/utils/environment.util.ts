import logger from "@/utils/logger.util";

async function checkEnvironment() {
  const env = process.env;

  const errors: string[] = [];

  if (!env.NODE_ENV) {
    errors.push("NODE_ENV is not defined");
  }

  if (!env.DATABASE_URL) {
    errors.push("DATABASE_URL is not defined");
  }

  if (env.NOTIFICATION === "gotify") {
    if (!env.GOTIFY_TITLE) {
      errors.push("GOTIFY_TITLE is not defined");
    }

    if (!env.GOTIFY_URL) {
      errors.push("GOTIFY_URL is not defined");
    }

    if (!env.GOTIFY_TOKEN) {
      errors.push("GOTIFY_TOKEN is not defined");
    }
  }

  if (errors.length > 0) {
    logger.error({
      message: `(environment.util.ts) Environment variables are not set ❌\n${errors}`,
    });
    throw new Error(`\n${errors.join("\n")}`);
  }

  logger.log({
    level: "info",
    message: `(environment.util.ts) Environment variables are all set ✅`,
  });
}

export default checkEnvironment;
