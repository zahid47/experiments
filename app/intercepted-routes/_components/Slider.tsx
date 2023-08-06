"use client";

import { useRouter } from "next/navigation";
import { Slider } from "@mantine/core";

export default function SliderCustom({
  currentValue,
  max,
}: {
  currentValue: number;
  max: number;
}) {
  const router = useRouter();

  return (
    <Slider
      defaultValue={currentValue}
      w={300}
      max={max}
      onChangeEnd={(value) => {
        router.push(`/intercepted-routes?limit=${value}`);
      }}
    />
  );
}
