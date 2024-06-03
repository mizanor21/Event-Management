import Signin from "../../authentication/Signin";
import Signup from "../../authentication/Signup";
import Banner from "./Banner/Banner";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <Signin></Signin>
      <Signup></Signup>
    </div>
  );
};

export default Home;
