import ChangeThemeButton from "./ChangeThemeButton";
import Navbar from "./Navbar";
import { Pictures } from "../styledComponents";
import { Card } from "../styledComponents/Card";
const Home = (props) => {
  return (
    <>
      <Navbar />
      <ChangeThemeButton />
      <Pictures src="https://picsum.photos/200" />
      <Card />
    </>
  );
};
export default Home;
