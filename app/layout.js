import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700"],
  display: 'swap'  // Ajout de cette ligne
});

const ovo = Ovo({
  subsets: ["latin"], 
  weight: ["400"],
  display: 'swap'  // Ajout de cette ligne
});

export const metadata = {
  title: "Fanny Olenga Binene",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${outfit.className} ${ovo.className} 
        antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`} //dark:bg-darkTheme dark:text-white
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
