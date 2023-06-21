import Link from "next/link";

export default function SecretContent({ text }: { text: string }) {
  return (
    <article>
      <p className="text-3xl text-white">{text}</p>
      <div>
      {Array.from({ length: 10 }, (_, i) => (
        <div key={i} className="flex flex-col items-center justify-center">
          <Link href={`/secret/${i}`}>
            {i}. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Link>
        </div>
      ))}
    </div>
    </article>
  );
}
