import winston, { LoggerOptions } from "winston";
import DailyRotateFile from "winston-daily-rotate-file";
import dotenv from "dotenv";
dotenv.config();

const { combine, timestamp, printf, colorize } = winston.format;

const customLevels = {
  levels: {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    debug: 4,
  },
  colors: {
    error: "red",
    warn: "yellow",
    info: "green",
    http: "magenta",
    debug: "blue",
  },
};

const loggerOption: {
  create: LoggerOptions;
  config: LoggerOptions;
} = {
  create: {
    format: combine(
      timestamp(),
      printf((info) => `${info.timestamp} ${info.level}: ${info.message}`)
    ),
  },
  config: {
    levels: customLevels.levels,
    transports: [
      new DailyRotateFile({
        filename: "logs/%DATE%-error.log",
        level: "error",
        datePattern: "YYYY-MM-DD",
        zippedArchive: true,
        maxSize: "20m",
        maxFiles: "14d",
      }),
      new DailyRotateFile({
        filename: "logs/%DATE%-combined.log",
        level: "http",
        datePattern: "YYYY-MM-DD",
        zippedArchive: true,
        maxSize: "20m",
        maxFiles: "14d",
      }),
      new winston.transports.Console({
        level: process.env.LOG_LEVEL
          ? process.env.LOG_LEVEL
          : process.env.NODE_ENV !== "production"
          ? "http"
          : "info",
        format: combine(
          colorize(),
          timestamp(),
          printf(
            ({ timestamp, level, message }) =>
              `${timestamp} ${level}: ${message}`
          )
        ),
      }),
    ],
  },
};

export default loggerOption;
export { customLevels };
