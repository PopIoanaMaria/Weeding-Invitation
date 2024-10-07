import menuData from "./../../db.json";
import ContainerMenu from "../../Components/containerMenu";

const FoodMenu: React.FC = () => {
  const foodMenu = menuData.foodMenu;

  return (
    <ContainerMenu
      title={"Meniu de mâncare"}
      menu={foodMenu}
      isFoodMenu={true}
    />
  );
};

export default FoodMenu;
