import './globals.css';
export const metadata = {
  title: "Melovix Motion",
  description: "Next.js 14 App Router setup",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
