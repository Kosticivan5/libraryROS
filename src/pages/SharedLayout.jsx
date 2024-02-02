import { Outlet } from "react-router-dom";
import LibraryNav from "../components/LibraryNav";
import Banner from "../components/Banner";

const SharedLayout = () => {
  return (
    <>
      <Banner />
      <main className="content-container">
        <LibraryNav />
        <Outlet />
      </main>
    </>
  );
};
export default SharedLayout;
