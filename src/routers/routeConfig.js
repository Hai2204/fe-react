import { Route, BrowserRouter, Routes } from "react-router-dom";
import routes from "./routes"
import { useEffect } from "react";
import PrivateRoute from "./PrivateRoute";

export default function RouteConfig({ history }) {
    useEffect(() => {
        const title = routes.find(e => e.path === history.location.pathname);
        document.title = title?.title || "Trang không tồn tại";
    }, [history.location.pathname]);

    return <BrowserRouter>
        <Routes>
            {routes.map(e => {
                    return <Route path={e.path} element={<PrivateRoute {...e}/>} key={e.id} />
            })}
        </Routes>
    </BrowserRouter>
}