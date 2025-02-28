import Navbar from "./components/Navbar";
import "./globals.css";
import Footer from "./components/Footer";
import LoadingProvider from "./components/LoadingProvider";

export const metadata = {
  title: "International Trade & Carriage of Goods by Sea - Mfon Usoro",
  description:
    "Explore 'International Trade & Carriage of Goods by Sea' by Mfon Usoro – an authoritative guide on financing international trade, shipping law, and transport logistics.",
  keywords: [
    "book launch",
    "new book release",
    "financing international trade in goods",
    "Financing international transportation of goods",
    "Carriage of goods by sea",
    "International trade",
    "Mfon Usoro",
    "Mfon Ekong Usoro",
    "bestselling book in maritime law",
    "transport",
    "letter of credit",
    "documentary credits",
    "Importers and exporters",
    "Shipping Companies",
    "law books",
    "research books",
    "marine transportation",
    "AFCFTA Articles by Mfon Usoro",
    "Bill of lading",
    "Nigerian jurisprudence of foreign jurisdiction agreements",
    "Choice of law clauses",
    "Foreign jurisdiction clause",
    "Sale of goods",
    "Hague Rules",
    "Rotterdam rules",
    "Hamburg Rules",
    "Arbitration and conciliation Act",
    "UCP",
    "Carriage of goods by sea",
  ].join(", "), // Meta keyword best practice
  authors: [{ name: "Mfon Usoro" }],
  openGraph: {
    title: "International Trade & Carriage of Goods by Sea - Mfon Usoro",
    description:
      "Dive into Mfon Usoro’s latest book on maritime law, financing trade, and shipping regulations.",
    url: "https://mfonusorobooks.com",
    siteName: "Mfon Usoro Books",
    type: "book",
    images: [
      {
        url: "https://i.ibb.co/Cp5XNvKY/mfon-usoro-book-cover.webp",
        width: 1200,
        height: 630,
        alt: "International Trade & Carriage of Goods by Sea - Book Cover",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "International Trade & Carriage of Goods by Sea - Mfon Usoro",
    description:
      "Explore this essential book on financing international trade, maritime law, and transport logistics by Mfon Usoro.",
    images: ["https://i.ibb.co/Cp5XNvKY/mfon-usoro-book-cover.webp"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <LoadingProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow pt-[60px]">{children}</main>
            <Footer />
          </div>
        </LoadingProvider>
      </body>
    </html>
  );
}
