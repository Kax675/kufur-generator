import { Head } from "$fresh/runtime.ts";

export default function Error404() {
  return (
    <>
      <Head>
        <title>404 - Page not found</title>
      </Head>
      <div class="p-4 flex flex-1 flex-col gap-2 items-center justify-center">
        <h1 class="text-4xl font-bold">404 - Page not found</h1>
        <p class="text-black/50">
          The page you are looking for does not exist.
        </p>
      </div>
    </>
  );
}
