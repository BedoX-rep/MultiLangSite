import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import i18n from "./lib/i18n";
import { StrictMode } from "react";
import { LanguageProvider } from "./context/LanguageContext";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { I18nextProvider } from "react-i18next";

// Initialize the root element
const rootElement = document.getElementById("root");

// Render the app once i18n is initialized
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <I18nextProvider i18n={i18n}>
        <LanguageProvider>
          <QueryClientProvider client={queryClient}>
            <App />
          </QueryClientProvider>
        </LanguageProvider>
      </I18nextProvider>
    </StrictMode>
  );
}
