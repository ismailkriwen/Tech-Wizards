import { ProvidersContainer } from "@/components/Providers";
import type { Metadata } from "next";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../globals.css";

export const metadata: Metadata = {
  title: {
    template: "Tech Wizards | %s",
    default: "Tech Wizards",
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ProvidersContainer>{children}</ProvidersContainer>
        <ToastContainer
          position="bottom-right"
          autoClose={2500}
          pauseOnHover={false}
        />
      </body>
    </html>
  );
};

export default RootLayout;
