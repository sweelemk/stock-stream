import { NavLink } from "react-router-dom";
import { ROUTES } from "shared/constants/routes";
import { Logo } from "shared/ui";
import Icon from "shared/ui/icons";
import { cn } from "shared/utils";

const Sidebar = () => {
  return (
    <div className="flex flex-col fixed w-72 inset-y-0 z-10">
      <div className="flex flex-grow px-6 bg-primary overflow-y-auto gap-y-5 flex-col">
        <div className="shrink-0 flex h-16 items-center gap-4">
          <Logo className="h-8 text-white" />
          <span className="text-white font-medium">StockStream</span>
        </div>
        <nav className="flex flex-col flex-1">
          <ul className="flex flex-col flex-1 gap-y-5" role="list">
            <li>
              <ul className="-mx-2 space-y-1">
                {ROUTES.map((route) => (
                  <li key={route.id}>
                    <NavLink
                      to={route.path}
                      className={({ isActive }) =>
                        cn(
                          `flex items-center gap-x-3 p-2 rounded-md font-medium transition-colors text-sm leading-6 text-indigo-200 hover:text-white hover:bg-indigo-700`,
                          `${isActive && "text-white bg-indigo-700"}`
                        )
                      }
                    >
                      <Icon name={route.icon} />
                      Dashboard
                    </NavLink>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
