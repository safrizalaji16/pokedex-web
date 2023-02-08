import { Outlet } from "react-router-dom";

export default function BaseLayout() {
  return (
    <>
      <div>BaseLayout</div>
      <div>
        <Outlet />
      </div>
    </>
  );
}
