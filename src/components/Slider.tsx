"use client";

import { useRouter } from "next/navigation";
import { Slider } from "@mantine/core";

export default function SliderCustom({
  currentValue,
}: {
  currentValue: number;
}) {
  const router = useRouter();

  return (
    <Slider
      w={300}
      defaultValue={currentValue}
      min={1}
      max={5}
      marks={[
        { value: 1, label: "1" },
        { value: 2, label: "2" },
        { value: 3, label: "3" },
        { value: 4, label: "4" },
        { value: 5, label: "5" },
      ]}
      onChangeEnd={(value) => {
        router.push(`/?limit=${value}`);
      }}
    />
  );
}
