import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/home";
import PricingPage from "@/pages/pricing";
import BlogPage from "@/pages/blog";
import AboutPage from "@/pages/about";
import NotFoundPage from "@/pages/notFound";
import LoginPage from "@/pages/login";
import RegisterPage from "@/pages/register";

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
      <Route element={<RegisterPage />} path="/register" />
    </Routes>
  );
}

export default App;
