import styled from "styled-components";
import Swal from "sweetalert2";

const OrderNowButtton = styled.button`
  padding: 10px 20px;
  font-size: 1.2rem;
  border-radius: 10px;
  // background: transparent;
  background: #34b96f;
  color: #ffffff;
  border: 1px solid transparent;
  cursor: pointer;
  margin-right: 25px;
  transition: 0.5s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const Order_Button = () => {
  const handleClick = async () => {
    const { value: fruit } = await Swal.fire({
      title: "Select field validation",
      input: "select",
      inputOptions: {
        Burger: {
          Cheeseburger: "Cheeseburger",
          MushroomSwissburger: "Mushroom Swiss burger",
          Slugburger: "Slugburger",
          Coconutburger: "Coconut burger",
          Chickenbueger: "Chicken burger",
        },
        Pizza: {
          DetroitPizza: "Detroit Pizza.",
          VeggiePizza: "Veggie Pizza.",
          CheesePizza: "Cheese Pizza",
          MeatPizza: "Meat Pizza ",
          MargheritaPizza: "Margherita Pizza ",
        },
        Donuts: {
          CakeDoughnut: "Cake Doughnut",
          Yeastoughnut: "Yeast Doughnut",
          FrosteDoughnut: "Frosted Doughnut ",
          BostonCreamDoughnut: " Boston Cream Doughnut",
          OldFashionedDoughnut: "Old-Fashioned Doughnut",
        },
        Cakes: {
          ChocolateCake: "Chocolate Cake",
          StrawberryCake: "Strawberry Cake",
          VanillaCake: "Vanilla Cake",
          LemonCake: "Lemon Cake",
        },
        French_Fries: {
          SteakFries: "Steak Fries",
          CrinkleCutFries: "Crinkle Cut Fries",
          CurlyFry: "Curly Fry",
        },
      },
      inputPlaceholder: "Select Form The Popular List Menu",
      showCancelButton: true,
      inputValidator: (value) => {
        return new Promise((resolve) => {
          if (value === "") {
            resolve(
              "You need to select from the popular menu to be re-directed"
            );
          } else {
            resolve();
          }
        });
      },
    });

    if (fruit) {
      Swal.fire(`You selected: ${fruit}`);
    }
  };

  return (
    <>
      <OrderNowButtton onClick={handleClick}>Order Now</OrderNowButtton>
    </>
  );
};

export default Order_Button;
