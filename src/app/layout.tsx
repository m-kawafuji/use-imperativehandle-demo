import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'useImperativeHandle',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
