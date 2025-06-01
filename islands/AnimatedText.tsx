import { useEffect, useRef } from "preact/hooks";
import { animate } from "motion";

interface Props {
  text: string;
}

export default function AnimatedText({ text }: Props) {
  const visibleRef = useRef<HTMLDivElement>(null);
  const ghostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Disable animation on mobile devices (e.g., width < 768px)
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    const visible = visibleRef.current;
    const ghost = ghostRef.current;
    if (!visible || !ghost) return;
  
    // Set ghost text to measure width
    ghost.textContent = text;
    const newWidth = ghost.getBoundingClientRect().width;
    const currentWidth = visible.offsetWidth;
  
    if (isMobile) {
      // Skip animation on mobile
      visible.textContent = text;
      visible.style.opacity = "1";
      visible.style.filter = "blur(0px)";
      return;
    }
  
    // Animate on non-mobile
    animate(visible, { opacity: 0, filter: "blur(2px)" }, { duration: 0.2 })
      .finished
      .then(() => {
        visible.textContent = text;
        animate(visible, {
          width: [`${currentWidth}px`, `${newWidth}px`],
          opacity: [0, 1],
          filter: ["blur(2px)", "blur(0px)"],
        }, {
          duration: 1,
          type: "spring",
          bounce: 0.1,
        });
      });
  }, [text]);  

  return (
    <div class="bg-white border-2 border-black rounded-xl p-4 shadow-lg">
        <div class="relative overflow-hidden">
      {/* Visible animated container */}
      <div
        ref={visibleRef}
        class="font-mono text-center inline-block whitespace-normal md:whitespace-nowrap"
        style={{
          width: "auto",
          opacity: 1,
          filter: "blur(0px)",
        }}
      >
        {text}
      </div>

      {/* Hidden ghost element used for measuring */}
      <div
        ref={ghostRef}
        class="absolute font-mono text-center invisible whitespace-normal md:whitespace-nowrap"
        style={{
          pointerEvents: "none",
          visibility: "hidden",
          whiteSpace: "nowrap",
        }}
      >
        {text}
      </div>
    </div>
    </div>
  );
}
