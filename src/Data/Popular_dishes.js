import cheeseBurger from "/src/assets/Images/Burgers/burger2.webp";
import frenchfreis from "/src/assets/Images/FrencsFries/fries6.jpg";
import pizza from "/src/assets/Images/Pizza/pizza5.webp";
import chicken from "/src/assets/Images/Chickens/chicken4.jpg";
import donut from "/src/assets/Images/Donuts/donut3.jpg";
import coffee from "/src/assets/Images/Coffee/coffee4.jpg";
import cake from "/src/assets/Images/Cakes/cake10.jpg";
import bread from "/src/assets/Images/Burgers/bread.jpg";

let popular_dishes = [
  {
    itemId: 1,
    name: "Cheese Burger",
    price: 24.18,
    rating: "4.8",
    image: cheeseBurger,
  },
  {
    itemId: 2,
    name: "French Fries",
    price: 12.78,
    rating: "4.5",
    image: frenchfreis,
  },
  {
    itemId: 3,
    name: "Cream Donut",
    price: 15.0,
    rating: "4.9",
    image: donut,
  },
  {
    itemId: 4,
    name: "Grilled Sausage",
    price: 36.0,
    rating: "4.3",
    image: pizza,
  },
  {
    itemId: 5,
    name: "Banana Cake",
    price: 15.21,
    rating: "4.7",
    image: cake,
  },
  {
    itemId: 6,
    name: "Afracan Coffee",
    price: 11.98,
    rating: "5.0",
    image: coffee,
  },
  {
    itemId: 7,
    name: "Fry Chicken",
    price: 22.08,
    rating: "4.8",
    image: chicken,
  },
  {
    itemId: 8,
    name: "Fresh Bread",
    price: 8.99,
    rating: "4.5",
    image: bread,
  },
];

export default popular_dishes;
