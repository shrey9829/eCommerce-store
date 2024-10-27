import Footer from "@/components/footer";
import "./globals.css";
import { Urbanist } from "next/font/google";
import Navbar from "@/components/navbar";
import ModalProvider from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";
import AuthProvider from "@/providers/sessionProvider";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { ThemeProvider } from "@/providers/theme-provider";
import { redirect } from "next/navigation";

const font = Urbanist({ subsets: ["latin"] });

export const metadata = {
  title: `Store`,
  description: "Client Store",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className={font.className}>
        <AuthProvider session={session}>
          <ModalProvider />
          <ToastProvider />
          <Navbar session={session} />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
