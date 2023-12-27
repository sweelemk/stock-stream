import { Sidebar } from "components/sidebar";
import { useEffect, useState } from "react";
import { useWindowSize } from "shared/hooks/useWindowSize";
import { Drawer } from "shared/ui";
import Icon from "shared/ui/icons";

const MobileSidebar: React.FC = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const size = useWindowSize();

  useEffect(() => {
    if (size.width > 1023 && isDrawerOpen) {
      setDrawerOpen(false)
    }
  }, [isDrawerOpen, size]);

  return (
    <div>
      <span>
        <button
          className="-mx-2.5 lg:hidden p-2.5"
          type="button"
          onClick={() => setDrawerOpen(true)}
        >
          <Icon name="burger" />
        </button>
      </span>
      <Drawer
        open={isDrawerOpen}
        closeDrawer={(state) => {
          console.log(state);
          setDrawerOpen(state);
        }}
      >
        <Sidebar />
      </Drawer>
    </div>
  );
};

export default MobileSidebar;
