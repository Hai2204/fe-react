import { Route, BrowserRouter, Routes } from "react-router-dom";
import routes from "./routes"
import { useEffect } from "react";

export default function RouteConfig({ history }) {
    useEffect(() => {
        const title = routes.find(e => e.path === history.location.pathname);
        document.title = title?.title || "Trang không tồn tại";
    }, [history.location.pathname]);

    return <BrowserRouter>
        <Routes onChange={yourHandler}>
            {routes.map(e => {
                return <Route path={e.path} element={e.component} key={e.id} />
            })}
        </Routes>
    </BrowserRouter>
}
function yourHandler(previousRoute, nextRoute) {
    //do your logic here
    console.log(1231);
 }