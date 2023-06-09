import Login from "page/login/Login";
import { isAuthenlicated } from "page/login/store/loginSlice";
import { Suspense, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";

function PrivateRoute({ title, component }) {
  const isAuth = useSelector(isAuthenlicated);
  const [authenlicated, setAuthenlicated] = useState(isAuth);
  const location = useLocation();

  useEffect(() => {
    document.title = title;
    setAuthenlicated(isAuth);
  }, [location.pathname, isAuth, title]);

  return (
    authenlicated
      ? <Suspense fallback={<div>Loading...</div>}>{component}</Suspense>
      : <Login />
  );
}
export default PrivateRoute;