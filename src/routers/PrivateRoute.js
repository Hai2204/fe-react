import { getToken } from "page/login/store/loginSlice";
import { Suspense, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";

function PrivateRoute({ auth, component }) {

  const [authenlicated, setAuthenlicated] = useState(auth);
  const token = useSelector(getToken);

  
  useEffect(() => {
    setAuthenlicated(auth);
  }, [auth]);

  // useEffect(() => {
  //   setAuthenlicated(!!token);
  // }, [token]);

  return (
    !authenlicated
      ? <Suspense fallback={<div>Loading...</div>}>{component}</Suspense>
      : <Navigate to="/login.html" replace={true} />
  );
}
export default PrivateRoute;