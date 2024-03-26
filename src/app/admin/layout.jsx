import "../globals.css";
import { Sidebar } from "@/sections/sidebar";
import { Topbar } from "@/sections/topbar";
const seo_meta = require('../config/seo_meta.json');
export const metadata = seo_meta;

export default function RootLayout({ children }) {
    return (
        <html lang="es-CL">
            <body className="bg-black flex">
                <Sidebar />
                <Topbar />

                <main className="flex-1 flex justify-center items-center">
                    <div className="container px-6">{children}</div>
                </main>
            </body>
        </html>
    );
}