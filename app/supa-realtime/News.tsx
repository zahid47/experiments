"use client";

import { useEffect, useState } from "react";
import type { News } from "@prisma/client";
import supa from "@/lib/supaClient";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Props {
  initialNews: News[];
}

export default function News({ initialNews }: Props) {
  const [news, setNews] = useState(initialNews);
  const [orderAlert, setOrderAlert] = useState<News[] | null>(null);

  useEffect(() => {
    const channel = supa
      .channel("any")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "News" },
        (payload) => {
          const newNews = payload.new as News;
          setNews((prev) => [...prev, newNews]);
          setOrderAlert((prev) => [...(prev ?? []), newNews]);
        }
      )
      .subscribe();

    return () => {
      supa.removeChannel(channel);
    };
  }, []);

  return (
    <>
      <Dialog
        open={Boolean(orderAlert)}
        onOpenChange={() => {
          setOrderAlert(null);
        }}
      >
        <DialogContent className="h-screen min-w-[100%] bg-red-900">
          <DialogHeader>
            <DialogTitle>New Order(s) Received</DialogTitle>
            <DialogDescription>
              {orderAlert?.map((item) => (
                <div key={item.id}>
                  <h2 className="text-lg">{item.headline}</h2>
                  <p className="text-gray-500">{item.content}</p>
                </div>
              ))}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <ul className="m-auto flex h-screen w-[50%] flex-col items-start justify-center gap-4">
        {news.map((item) => (
          <div key={item.id}>
            <li key={item.id}>
              <h2 className="text-lg">{item.headline}</h2>
              <p className="text-gray-500">{item.content}</p>
            </li>
          </div>
        ))}
      </ul>
    </>
  );
}
