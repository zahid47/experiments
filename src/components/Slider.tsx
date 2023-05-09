"use client";

import { useRouter } from "next/navigation";
import ReactSlider from "react-slider";

export default function Slider({ currentValue }: { currentValue: number }) {
  const router = useRouter();

  return (
    <section>
      <ReactSlider
        className="horizontal-slider p-6"
        defaultValue={currentValue}
        min={1}
        max={5}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        onAfterChange={(value) => {
          router.push(`/?limit=${value}`);
        }}
      />
    </section>
  );
}
