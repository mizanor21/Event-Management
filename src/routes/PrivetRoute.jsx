import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.config";

const PrivetRoute = ({ children }) => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  if (user) {
    return children;
  }
  return navigate("/");
};

export default PrivetRoute;
