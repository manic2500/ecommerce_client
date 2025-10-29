import Footer from "@/components/footer";
import Header from "@/components/shared/header";
import { Outlet } from "react-router-dom";

export default function HomeLayout() {
  return (
    <div>
      <div className="flex h-screen flex-col">
        <Header />
        <main className="flex-1 wrapper">
          <Outlet />
        </main>
        <Footer />
      </div>

    </div>
  );
}