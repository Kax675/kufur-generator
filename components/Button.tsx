import { JSX } from "preact";
import { useRef, useEffect } from "preact/hooks";
import { Ref } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { press, animate } from "motion";
import { tv } from "tailwind-variants";

const buttonVariants = tv({
  base: "font-semibold text-sm shadow-md border-2 border-transparent px-5 py-2 rounded-xl transition-colors focusable",
  variants: {
    variant: {
      primary: "bg-black text-white hover:bg-neutral-950",
      secondary: "border-black border-2 bg-white hover:bg-neutral-200",
    },
  },
});

type ButtonProps = {
  variant?: "primary" | "secondary";
  disabled?: boolean;
} & (JSX.HTMLAttributes<HTMLButtonElement> | JSX.HTMLAttributes<HTMLAnchorElement>);

export function Button(props: ButtonProps) {
  const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null);

  useEffect(() => {
    if (!buttonRef.current) return;

    return press(buttonRef.current, (element) => {
      animate(element, { scale: 0.95 }, { type: "spring", duration: 0.5, bounce: 0.5 });
      return () => animate(element, { scale: 1 }, { type: "spring", duration: 0.5, bounce: 0.5 });
    });
  }, []);

  const className = buttonVariants({ variant: props.variant || "primary" });

  if ("href" in props) {
    const anchorProps = props as JSX.HTMLAttributes<HTMLAnchorElement>;

    return (
      <a
        {...anchorProps}
        ref={buttonRef as Ref<HTMLAnchorElement>}
        class={className}
        role="button"
        aria-disabled={!IS_BROWSER || props.disabled}
      />
    );
  }

  const buttonProps = props as JSX.HTMLAttributes<HTMLButtonElement>;

  return (
    <button
      {...buttonProps}
      ref={buttonRef as Ref<HTMLButtonElement>}
      class={className}
      disabled={!IS_BROWSER || props.disabled}
    />
  );
}
