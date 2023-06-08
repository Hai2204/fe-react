
import Page1 from "components/Page";
import Page404 from "page/error/NotFound";
import Home from "page/home/Home";

const routes = [
    {
        id: 1,
        name: "Home",
        path: "/",
        title: "Trang Chủ",
        component: <Home />
    },
    {
        id: 2,
        name: "Home",
        path: "/home.html",
        title: "Trang Chủ 1",
        component:  <Home />
    },
    {
        id: 3,
        name: "page",
        path: "/page.html",
        title: "page",
        component:  <Page1 />
    },
    {
        id: 99,
        name: "NotFound",
        path: "*",
        title: "Trang không tồn tại",
        component: <Page404 />
    },
];
export default routes;