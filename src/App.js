
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateRoute from 'routers/PrivateRoute';
import routes from 'routers/routes';


function App({ history }) {
  useEffect(() => {
    const title = routes.find(e => e.path === history.location.pathname);
    document.title = title?.title || "Trang không tồn tại";
}, [history.location.pathname]);

  return (
    <BrowserRouter>
        <Routes>
            {routes.map(e => {
                return <Route path={e.path} element={<PrivateRoute {...e} />} key={e.id} />
            })}
        </Routes>
    </BrowserRouter>
  );
}

export default App;