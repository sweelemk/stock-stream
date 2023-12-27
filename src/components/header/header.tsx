import { Menu } from "components/menu";
import { MobileSidebar } from "components/mobile-sidebar";

const Header = () => {
  return (
    <div className="lg:px-8 z-40 mx-auto sticky top-0 bg-neutral-50/75 backdrop-blur supports-[backdrop-filter]:bg-neutral-50/40">
      <div className="flex h-16 lg:shadow-none shadow-sm border-gray-300 border-b px-4 sm:px-6 lg:px-0 items-center md:gap-x-6 gap-x-4 justify-between">
        <MobileSidebar />
        <div>
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default Header;
