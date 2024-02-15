import { useRouteError } from "react-router-dom";
const ErrorComp = () => {
  const error = useRouteError();

  return (
    <div>
      <h1>OOPS!</h1>
      <h2>
        Something Went Wrong!!! {error.status} {error.statusText}
      </h2>
    </div>
  );
};

export default ErrorComp;
