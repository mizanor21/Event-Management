import Signin from "../../authentication/Signin";
import Signup from "../../authentication/Signup";
import Banner from "./Banner/Banner";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <Signup></Signup>
      <Signin></Signin>
    </div>
  );
};

export default Home;
