import "../globals.css";
import { Header } from '@/sections/header';
import { Footer } from '@/sections/footer';
const seo_meta = require('../config/seo_meta.json');
export const metadata = seo_meta;

export default function RootLayout({ children }) {
  return (
    <html lang="es-CL">
      <body className="bg-black">
        <Header />

        {children}
        
        <Footer />

      </body>
    </html>
  );
}
