import Signin from "../../authentication/Signin";
import Signup from "../../authentication/Signup";
import Contact from "../Others/Contact/Contact";
import Banner from "./Banner/Banner";
import Events from "./Events/Events";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <Signin></Signin>
      <Signup></Signup>
      <Events></Events>
      <Contact></Contact>
    </div>
  );
};

export default Home;
