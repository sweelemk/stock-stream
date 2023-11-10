import { Header } from "components/header";
import { Sidebar } from "components/sidebar";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="">
      <Sidebar />
      <div className="lg:pl-72 h-[100vh]">
        <Header />
        <main className="py-10">
          <div className="px-4 sm:px-6 lg:px-8 mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
