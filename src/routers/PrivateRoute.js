import { useEffect, useState } from "react";
import { Navigate } from "react-router";

function PrivateRoute({ auth, component }) {

  const [authenlicated, setAuthenlicated] = useState(auth);

  useEffect(() => {
    setAuthenlicated(auth);
  }, [auth]);

  console.log(authenlicated);

  return (
    !authenlicated
      ? component
      : <Navigate to="/login.html" replace={true} />
  );
}
export default PrivateRoute;