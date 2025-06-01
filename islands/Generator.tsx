import type { Signal } from "@preact/signals";
import { Button } from "../components/Button.tsx";
import { generateSwear } from "../lib/utils.ts";
import AnimatedText from "./AnimatedText.tsx";

interface GeneratorProps {
  content: Signal<string>;
}

export default function Generator(props: GeneratorProps) {
  return (
    <div class="flex flex-col gap-4 items-center">
      <AnimatedText text={props.content.value} />
      <div class="flex gap-2">
        <Button onClick={() => props.content.value = generateSwear()}>
          Yeni Oluştur
        </Button>
        <Button href="/api/generate" variant="secondary">
          REST API
        </Button>
      </div>
    </div>
  );
}
