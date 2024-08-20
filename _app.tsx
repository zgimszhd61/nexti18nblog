// app/layout.tsx
import { appWithTranslation } from 'next-i18next';
import './globals.css';

export const metadata = {
  title: 'Next.js Demo',
  description: 'A demo for internationalization',
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

export default appWithTranslation(RootLayout);