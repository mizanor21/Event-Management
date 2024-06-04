import Signin from "../../authentication/Signin";
import Signup from "../../authentication/Signup";
import Banner from "./Banner/Banner";
import Events from "./Events/Events";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <Signin></Signin>
      <Signup></Signup>
      <Events></Events>
    </div>
  );
};

export default Home;
