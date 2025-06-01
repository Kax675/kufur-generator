import { type PageProps } from "$fresh/server.ts";
export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Kufur Generator</title>
        <link rel="stylesheet" href="/styles.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Component />
        <footer class="fixed flex items-center gap-1 justify-center bottom-0 left-0 right-0 p-4 text-center text-black/50 text-sm font-medium">
          <a href="https://github.com/Kax675/kufur-generator">
            Source
          </a>
          | Made with ❤️ by
          <a href="https://github.com/Kax675">
            Kax675
          </a>
        </footer>
      </body>
    </html>
  );
}
