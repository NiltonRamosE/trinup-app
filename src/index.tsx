import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react"
import App from "./App.tsx";
import { Provider } from "./provider.tsx";
import "@/styles/globals.css";
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>    
      <BrowserRouter>
        <Provider>
          <App />
          <Analytics />
        </Provider>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
);
