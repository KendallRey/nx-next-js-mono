import Providers from 'apps/fire-bnb/services/Providers';
import './global.css';

export const metadata = {
  title: 'FireBNB',
  description: 'Generated by create-nx-workspace',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
