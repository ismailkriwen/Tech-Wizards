"use client";

import { NextUIProvider } from "@nextui-org/react";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";

export const ProvidersContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <ThemeProvider
      defaultTheme="system"
      attribute="class"
      themes={["light", "dark", "system"]}
      enableColorScheme={true}
      enableSystem={true}
    >
      <NextUIProvider>
        <SessionProvider>{children}</SessionProvider>
      </NextUIProvider>
    </ThemeProvider>
  );
};
