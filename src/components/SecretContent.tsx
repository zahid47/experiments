export default function SecretContent({ text }: { text: string }) {
  return (
    <article>
      <p className="text-3xl text-white">{text}</p>
    </article>
  );
}
