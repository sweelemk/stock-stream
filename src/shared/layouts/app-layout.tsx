import { Header } from "components/header";
import { Sidebar } from "components/sidebar";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="">
      <div className="hidden lg:flex h-full">
        <Sidebar />
      </div>
      <div className="lg:pl-72">
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
