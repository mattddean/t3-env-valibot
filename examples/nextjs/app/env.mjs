import { createEnv } from "@t3-oss/env-nextjs";
import { string, enumType } from "valibot";

export const env = createEnv({
  client: {
    NEXT_PUBLIC_GREETING: string(),
  },
  server: {
    SECRET: string(),
  },
  shared: {
    NODE_ENV: enumType(["development", "production"]),
  },
  experimental__runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_GREETING: process.env.NEXT_PUBLIC_GREETING,
  },
});
