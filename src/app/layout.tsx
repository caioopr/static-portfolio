import Footer from '@/components/Footer';
import Header from '@/components/Header';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <Header />
        <div className="mx-auto  max-w-4xl px-6">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
