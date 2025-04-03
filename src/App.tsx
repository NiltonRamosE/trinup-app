import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/home";
import PricingPage from "@/pages/pricing";
import BlogPage from "@/pages/blog";
import AboutPage from "@/pages/about";
import NotFoundPage from "@/pages/notFound";
import LoginPage from "@/pages/login";
import RegisterPage from "@/pages/register";
import CalculadoraIMCPage from "@/pages/calculadoraIMC";
import CalculadoraIAPage from "@/pages/calculadoraIA";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<PricingPage />} path="/precios" />
      <Route element={<BlogPage />} path="/blog" />
      <Route element={<AboutPage />} path="/nosotros" />
      <Route element={<LoginPage />} path="/login" />
      <Route element={<NotFoundPage />} path="*" />
      <Route element={<RegisterPage />} path="/register" />
      <Route element={<CalculadoraIMCPage />} path="/calculadoraIMC" />
      <Route element={<CalculadoraIAPage />} path="/calculadoraIA" />
    </Routes>
  );
}

export default App;
