import Provider from "@/components/NextAuthProvider";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "No API Todo",
  description: "Todo app with ZERO API calls, using Next.js 13.4",
};

export default function RootLayout({
  children,
  secretModal,
}: {
  children: React.ReactNode;
  secretModal?: React.ReactNode;
}) {
  return (
    <html>
      <body className={inter.className}>
        <Provider>
          {children}
          {secretModal}
        </Provider>
      </body>
    </html>
  );
}
