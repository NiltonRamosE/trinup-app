import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/home";
import ShopPage from "@/pages/shop";
import BlogPage from "@/pages/blog";
import AboutPage from "@/pages/about";
import NotFoundPage from "@/pages/notFound";
import LoginPage from "@/pages/login";
import RegisterPage from "@/pages/register";
import BMICalculatorPage from "@/pages/BMICalculator";
import WaterIntakeCalculatorPage from "@/pages/waterIntakeCalculator";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<ShopPage />} path="/tienda" />
      <Route element={<BlogPage />} path="/blog" />
      <Route element={<AboutPage />} path="/nosotros" />
      <Route element={<LoginPage />} path="/login" />
      <Route element={<NotFoundPage />} path="*" />
      <Route element={<RegisterPage />} path="/register" />
      <Route element={<BMICalculatorPage />} path="/calculadoraIMC" />
      <Route element={<WaterIntakeCalculatorPage />} path="/calculadoraIngestaAgua" />
    </Routes>
  );
}

export default App;
