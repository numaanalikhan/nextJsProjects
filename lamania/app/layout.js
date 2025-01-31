import Footer from "@/components/Footer/page";
import NavBar from "@/components/NavBar/page";
import "@/styles/globals.css"; // Ensure this is imported

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
