import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
// import Blogs from "../pages/Blogs";
// import Bookmarks from "../pages/Bookmarks";
// import Home from "../pages/Home";

const MainLayout = () => {
    return (
        <div>
            <Nav></Nav>
            <div className=" min-h-[calc(100vh-116px)]">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;