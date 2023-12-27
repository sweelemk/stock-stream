import { Menu as MenuHeadless, Transition } from "@headlessui/react";
import { authLogout } from "components/auth-provider/model";
import { Fragment } from "react";
import { Avatar } from "shared/ui/avatar";
import Icon from "shared/ui/icons";
import { useStateSelector, useAppDispatch } from "store/hooks";
import { profileSelector } from "store/models/profile";


const Menu = () => {
  const dispatch = useAppDispatch();
  const user = useStateSelector(profileSelector);
  
  const handleSignOut = () => {
    dispatch(authLogout())
  }
  return (
    <MenuHeadless as="div" className="relative">
      <div>
        <MenuHeadless.Button
          as="button"
          className="flex items-center p-1.5 -m-1.5"
        >
          <Avatar url={user.avatar_url} />
          <span className="hidden lg:flex items-center">
            <span className="text-sm font-medium ml-4">{user.full_name}</span>
            <Icon name="chevronDown" className="w-5 h-5 text-gray-400 ml-2" />
          </span>
        </MenuHeadless.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <MenuHeadless.Items className="space-y-1 absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
          <div className="px-1 py-1 ">
            <MenuHeadless.Item>
              {({ active }) => (
                <a
                  className={`${
                    active ? "bg-primary/90 text-white" : "text-gray-900"
                  } group transition-colors flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  href="/account-settings"
                >
                  <Icon name="settings" className="mr-2" />
                  Account settings
                </a>
              )}
            </MenuHeadless.Item>
          </div>
          <div className="px-1 py-1 ">
            <MenuHeadless.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-primary/90 text-white" : "text-gray-900"
                  } group transition-colors flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  type="button"
                  onClick={handleSignOut}
                >
                  <Icon name="exit" className="mr-2" />
                  Sign out
                </button>
              )}
            </MenuHeadless.Item>
          </div>
        </MenuHeadless.Items>
      </Transition>
    </MenuHeadless>
  );
};

export default Menu;
