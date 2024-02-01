import { Outlet } from "react-router-dom";
import LibraryNav from "../components/LibraryNav";
import Banner from "../components/Banner";

const SharedLayout = () => {
  return (
    <>
      <Banner />
      <LibraryNav />
      <main className="content-container">
        <Outlet />
      </main>
    </>
  );
};
export default SharedLayout;
