// app/layout.jsx
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata = {
  title: 'Your Landing Page',
  description: 'Crafted with passion.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-poppins text-black bg-white">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
