import { Spinner } from "react-bootstrap";
import { Route, Redirect } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

//private route set up
function PrivateRoute(props) {
  const { children, ...rest } = props;
  const { allAuthInfo } = useAuth();
  const { user, loading } = allAuthInfo;

  if (loading) {
    return (
      <div className="text-center my-5 py-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.displayName ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
