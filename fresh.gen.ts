// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $api_generate from "./routes/api/generate.ts";
import * as $index from "./routes/index.tsx";
import * as $AnimatedText from "./islands/AnimatedText.tsx";
import * as $Generator from "./islands/Generator.tsx";
import type { Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/api/generate.ts": $api_generate,
    "./routes/index.tsx": $index,
  },
  islands: {
    "./islands/AnimatedText.tsx": $AnimatedText,
    "./islands/Generator.tsx": $Generator,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
