
import Page1 from "components/Page";
import Page404 from "page/error/NotFound";
import Home from "page/home/Home";
import Login from "page/login/Login";
import Page2 from "page/Page2";

const routes = [
    {
        id: 1,
        name: "Home",
        path: "/",
        title: "Trang Chủ",
        auth: true,
        component: "Home"
    },
    {
        id: 2,
        name: "Home",
        path: "/home.html",
        title: "Trang Chủ 1",
        auth: true,
        component: <Home />
    },
    {
        id: 3,
        name: "page",
        path: "/page.html",
        title: "page",
        auth: false,
        component: <Page1 />
    },
    {
        id: 4,
        name: "login",
        path: "/login.html",
        title: "Đăng Nhập",
        auth: false,
        component: <Login />
    },
    {
        id: 5,
        name: "page1",
        path: "/page1.html",
        title: "trang 1",
        auth: false,
        component: <Page2 />
    },
    {
        id: 99,
        name: "NotFound",
        path: "*",
        title: "Trang không tồn tại",
        auth: true,
        component: <Page404 />
    },
];
export default routes;