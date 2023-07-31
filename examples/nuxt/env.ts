import { createEnv } from "@t3-oss/env-nuxt";
import { string } from "valibot";

export const env = createEnv({
  server: {
    SECRET: string(),
  },
  client: {
    NUXT_PUBLIC_GREETING: string(),
  },
});
