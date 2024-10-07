import menuData from "./../../db.json";
import ContainerMenu from "../../Components/containerMenu";

const DrinksMenu = () => {
  const drinksMenu = menuData.drinksMenu;

  return <ContainerMenu title={"Meniu de băuturi"} menu={drinksMenu} />;
};

export default DrinksMenu;
