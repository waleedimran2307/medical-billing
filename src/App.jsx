import { Outlet } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { Footer, Header, SideContact } from "@/components";

function App() {
  return (
    <>
      <div className="overflow-hidden relative">
        <Header />
        <SideContact />
        <Outlet />
        <Footer />
      </div>

      <Analytics />
    </>
  );
}

export default App;
