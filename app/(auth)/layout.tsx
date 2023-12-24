import { ProvidersContainer } from "@/components/Providers";
import type { Metadata } from "next";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../globals.css";

export const metadata: Metadata = {
  title: "Sign In",
};

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ProvidersContainer>
          <main className="container min-h-screen grid place-content-center">
            {children}
          </main>
        </ProvidersContainer>
        <ToastContainer
          position="bottom-right"
          autoClose={2500}
          pauseOnHover={false}
        />
      </body>
    </html>
  );
};

export default AuthLayout;
