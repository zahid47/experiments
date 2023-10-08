"use client";

import { useEffect, useState } from "react";
import type { News } from "@prisma/client";
import supa from "@/lib/supaClient";

interface Props {
  initialNews: News[];
}

export default function News({ initialNews }: Props) {
  const [news, setNews] = useState(initialNews);

  useEffect(() => {
    const channel = supa
      .channel("any")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "News" },
        (payload) => {
          const newNews = payload.new as News;
          setNews((prev) => [...prev, newNews]);
        }
      )
      .subscribe();

    return () => {
      supa.removeChannel(channel);
    };
  }, []);

  return (
    <ul className="m-auto flex h-screen w-[50%] flex-col items-start justify-center gap-4">
      {news.map((item) => (
        <div>
          <li key={item.id}>
            <h2 className="text-lg">{item.headline}</h2>
            <p className="text-gray-500">{item.content}</p>
          </li>
        </div>
      ))}
    </ul>
  );
}
