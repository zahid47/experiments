import "../styles/globals.css";
import { Inter } from "next/font/google";
import NextAuthProvider from "@/components/NextAuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Experiments",
  description: "experiments",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
  secretModal?: React.ReactNode;
}) {
  return (
    <html className="dark">
      <body className={inter.className}>
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
