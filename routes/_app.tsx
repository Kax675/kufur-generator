import { type PageProps } from "$fresh/server.ts";
export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Kufur Generator</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <Component />
        <footer class="fixed flex items-center gap-1 justify-center bottom-0 left-0 right-0 p-4 text-center text-black/50 text-sm font-medium">
          <a href="https://github.com/Kax675/kufur-generator">
            Source
          </a>
          |
          Made with ❤️ by
          <a href="https://github.com/Kax675">
            Kax675
          </a>
        </footer>
      </body>
    </html>
  );
}
