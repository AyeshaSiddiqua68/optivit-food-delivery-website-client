import { Spinner } from "react-bootstrap";
import { Route, Redirect } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";


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



















// import React from 'react';
// import { Spinner } from 'react-bootstrap';
// import { Redirect, Route } from 'react-router';
// import useAuth from '../../../hooks/useAuth';



// //private route for showing details
// const PrivateRoute = ({ children, ...rest }) => {
//     const { user, isLoading } = useAuth();
//     if (isLoading) {
//         return <Spinner animation="border" variant="danger" />
//     }
//     return (
//         <Route
//             {...rest}
//             render={({ location }) => user.email ? children : <Redirect
//                 to={{
//                     pathname: "/login",
//                     state: { from: location }
//                 }}
//             ></Redirect>

//             }
//         >

//         </Route>
//     );
// };

// export default PrivateRoute;