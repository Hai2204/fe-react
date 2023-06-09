
import { getAuthorizations } from 'page/login/store/loginSlice';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateRoute from 'routers/PrivateRoute';
import routes from 'routers/routes';

function App({ history }) {
  const author = useSelector(getAuthorizations);

  useEffect(() => {
    const map = routes.filter(e => author?.find((a) => a.path === e.path) || !e.auth);
    console.log(map);
    const title = map.find(e => e.path === history.location.pathname);
    document.title = title?.title || "Trang không tồn tại";
}, [history.location.pathname, author]);

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