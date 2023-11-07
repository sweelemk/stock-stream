import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="flex min-h-full flex-col p-5">
      <Outlet />
    </div>
  )
}

export default AuthLayout;