import { Outlet } from "react-router-dom";

import NavBar from "@/components/shared/NavBar";
import Footer from "@/components/shared/Footer";
import ScrollToTop from "@/routes/ScrollToTop";

export default function MainLayout() {
  return (
    <>
      <ScrollToTop />
      <NavBar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
