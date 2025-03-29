import { ReactNode } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { LanguageProvider } from "./context/LanguageContext";

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <LanguageProvider>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </LanguageProvider>
  );
}