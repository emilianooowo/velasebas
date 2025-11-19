import './globals.css';
import Header from './components/header';
import Footer from './components/footer';

export const metadata = {
  title: 'Velas',
  description: 'Velas artesanales, ambientadores y decoración en concreto.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}