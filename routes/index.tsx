import { useSignal } from "@preact/signals";
import Generator from "../islands/Generator.tsx";
import { generateSwear } from "../lib/utils.ts";
import { Head } from "$fresh/runtime.ts";

export default function Home() {
  const content = useSignal(generateSwear());
  return (
    <>
      <Head>
        <title>Küfür Oluşturucu</title>
      </Head>
      <div class="p-4 flex flex-1 flex-col gap-2 items-center justify-center">
        <h1 class="text-4xl font-bold">Küfür Oluşturucu</h1>
        <p class="text-black/50">
          Over-engineered bir küfür oluşturucu.
        </p>
        <Generator content={content} />
      </div>
    </>
  );
}
