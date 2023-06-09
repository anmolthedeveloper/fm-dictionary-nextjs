import "./globals.css";
import { Providers } from "./providers";
export const metadata = {
  title: "Dictionary App",
  description: "Author: anmolthedeveloper",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={
          " dark:bg-darkestBlackCustom bg-white overflow-y-scroll scrollbar-w-1 scrollbar-track-gray-200 scrollbar-thumb-gray-500"
        }
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
