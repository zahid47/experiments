export default function SecretContent({ text }: { text: string }) {
  return (
    <article className="h-screen flex justify-center items-center bg-red-500">
      <p className="text-3xl text-white">{text}</p>
    </article>
  );
}
