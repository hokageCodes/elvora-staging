// app/layout.jsx
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FooterBottom from './components/FooterBottom';

export const metadata = {
  title: 'Your Landing Page',
  description: 'Crafted with passion.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className="flex flex-col min-h-screen font-poppins text-black bg-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FooterBottom />
      </body>
    </html>
  );
}
