import Burger1 from "/src/assets/Images/Burgers/burger.webp";
import Burger2 from "/src/assets/Images/Burgers/burger1.webp";
import Burger3 from "/src/assets/Images/Burgers/burger2.webp";
import Burger4 from "/src/assets/Images/Burgers/burger4.jpg";
import Burger5 from "/src/assets/Images/Burgers/burger7.jpg";
import Burger6 from "/src/assets/Images/Burgers/burger8.jpg";
// Pizza Images
import Pizza1 from "/src/assets/Images/Pizza/pizza.jpg";
import Pizza2 from "/src/assets/Images/Pizza/pizza1.jpg";
import Pizza3 from "/src/assets/Images/Pizza/pizza2.jpg";
import Pizza4 from "/src/assets/Images/Pizza/pizza3.jpg";
import Pizza5 from "/src/assets/Images/Pizza/pizza4.webp";
import Pizza6 from "/src/assets/Images/Pizza/pizza6.webp";
// Coffee Images
import Coffee1 from "/src/assets/Images/Coffee/coffee1.jpg";
import Coffee2 from "/src/assets/Images/Coffee/coffee3.jpg";
import Coffee3 from "/src/assets/Images/Coffee/coffee4.jpg";
import Coffee4 from "/src/assets/Images/Coffee/coffee5.jpg";
import Coffee5 from "/src/assets/Images/Coffee/coffee6.jpg";
import Coffee6 from "/src/assets/Images/Coffee/coffee2.jpg";
//Chicken Images
import Chicken1 from "/src/assets/Images/Chickens/chicken1.jpg";
import Chicken2 from "/src/assets/Images/Chickens/chicken2.jpg";
import Chicken3 from "/src/assets/Images/Chickens/chicken3.jpg";
import Chicken4 from "/src/assets/Images/Chickens/chicken4.jpg";
import Chicken5 from "/src/assets/Images/Chickens/chicken5.jpg";
import Chicken6 from "/src/assets/Images/Chickens/chicken6.jpg";
//Fruits Images
import Fruit1 from "/src/assets/Images/Fruits/fruit1.jpg";
import Fruit2 from "/src/assets/Images/Fruits/fruit2.jpg";
import Fruit3 from "/src/assets/Images/Fruits/fruit3.jpg";
import Fruit4 from "/src/assets/Images/Fruits/fruit4.jpg";
import Fruit5 from "/src/assets/Images/Fruits/fruit5.jpg";
import Fruit6 from "/src/assets/Images/Fruits/fruit6.jpg";

const all_product = [
  {
    id: 1,
    name: "Cheese Burger",
    price: 24.18,
    rating: "4.8",
    image: Burger1,
    category: "Burger",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit ips amet aliquid odio expedita, modi labore!",
  },
  {
    id: 2,
    name: "Mushroom Swiss burger",
    price: 24.23,
    rating: "4.4",
    image: Burger2,
    category: "Burger",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit ips amet aliquid odio expedita, modi labore!",
  },
  {
    id: 3,
    name: "Slugburger",
    price: 22.17,
    rating: "4.7",
    image: Burger3,
    category: "Burger",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit ipsa amet aliquid odio expedita, modi labore!",
  },
  {
    id: 4,
    name: "Cheese Burger",
    price: 20.18,
    rating: "4.8",
    image: Burger4,
    category: "Burger",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit ipsa amet aliquid odio expedita, modi labore!",
  },
  {
    id: 5,
    name: "Coconut burger",
    price: 23.18,
    rating: "4.4",
    image: Burger5,
    category: "Burger",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit ipsa amet aliquid odio expedita, modi labore!",
  },
  {
    id: 6,
    name: "Chicken burger",
    price: 19.18,
    rating: "4.3",
    image: Burger6,
    category: "Burger",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit ipsaamet aliquid odio expedita, modi labore!",
  },
  {
    id: 7,
    name: "Detroit Pizza",
    price: 22.18,
    rating: "4.8",
    image: Pizza1,
    category: "Pizza",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit ipsaamet aliquid odio expedita, modi labore!",
  },
  {
    id: 8,
    name: "Cheese Pizza",
    price: 24.18,
    rating: "4.8",
    image: Pizza2,
    category: "Pizza",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit ipsa amet aliquid odio expedita, modi labore!",
  },
  {
    id: 9,
    name: "Veggie Pizza.",
    price: 24.18,
    rating: "4.8",
    image: Pizza3,
    category: "Pizza",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit ipsaamet aliquid odio expedita, modi labore!",
  },
  {
    id: 10,
    name: "Cheese Pizza",
    price: 24.18,
    rating: "4.8",
    image: Pizza4,
    category: "Pizza",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit ipsa amet aliquid odio expedita, modi labore!",
  },
  {
    id: 11,
    name: "Meat Pizza ",
    price: 24.18,
    rating: "4.8",
    image: Pizza5,
    category: "Pizza",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit ips amet aliquid odio expedita, modi labore!",
  },
  {
    id: 12,
    name: "Margherita Pizza ",
    price: 24.18,
    rating: "4.8",
    image: Pizza6,
    category: "Pizza",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit ipsaamet aliquid odio expedita, modi labore!",
  },
  {
    id: 13,
    name: "Black Coffee",
    price: 17.32,
    rating: "4.8",
    image: Coffee1,
    category: "Coffee",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit ipsaamet aliquid odio expedita, modi labore!",
  },
  {
    id: 14,
    name: "Cappuccino Coffee",
    price: 18.18,
    rating: "4.8",
    image: Coffee2,
    category: "Coffee",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit ipsa amet aliquid odio expedita, modi labore!",
  },
  {
    id: 15,
    name: "Latte Coffee",
    price: 14.18,
    rating: "4.8",
    image: Coffee3,
    category: "Coffee",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit ipsa amet aliquid odio expedita, modi labore!",
  },
  {
    id: 16,
    name: "Espresso. Coffee",
    price: 10.13,
    rating: "4.9",
    image: Coffee4,
    category: "Coffee",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit ipsa amet aliquid odio expedita, modi labore!",
  },
  {
    id: 17,
    name: " lungo Coffee",
    price: 11.1,
    rating: "4.6",
    image: Coffee5,
    category: "Coffee",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit ipsa amet aliquid odio expedita, modi labore!",
  },
  {
    id: 18,
    name: "Doppio Coffee",
    price: 13.18,
    rating: "4.8",
    image: Coffee6,
    category: "Coffee",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit ipsa amet aliquid odio expedita, modi labore!",
  },
  {
    id: 19,
    name: "Bake Chicken",
    price: 24.18,
    rating: "4.8",
    image: Chicken2,
    category: "Chicken",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit ipsa amet aliquid odio expedita, modi labore!",
  },
  {
    id: 20,
    name: "Fry Chicken",
    price: 23.18,
    rating: "4.8",
    image: Chicken1,
    category: "Chicken",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit ipsa amet aliquid odio expedita, modi labore!",
  },
  {
    id: 21,
    name: "Source Chicken",
    price: 28.18,
    rating: "4.8",
    image: Chicken3,
    category: "Chicken",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit ipsa amet aliquid odio expedita, modi labore!",
  },
  {
    id: 22,
    name: "Sesson Chicken",
    price: 21.18,
    rating: "4.8",
    image: Chicken4,
    category: "Chicken",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit ipsa amet aliquid odio expedita, modi labore!",
  },
  {
    id: 23,
    name: "Bake Chicken",
    price: 23.18,
    rating: "4.8",
    image: Chicken5,
    category: "Chicken",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit ipsa amet aliquid odio expedita, modi labore!",
  },
  {
    id: 24,
    name: "Creamy Chicken",
    price: 19.18,
    rating: "4.8",
    image: Chicken6,
    category: "Chicken",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit ipsa amet aliquid odio expedita, modi labore!",
  },
  {
    id: 25,
    name: " Blueberry",
    price: 9.18,
    rating: "4.8",
    image: Fruit1,
    category: "Fruits",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit ipsa amet aliquid odio expedita, modi labore!",
  },
  {
    id: 26,
    name: " Graps",
    price: 6.18,
    rating: "4.8",
    image: Fruit2,
    category: "Fruits",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit ipsa amet aliquid odio expedita, modi labore!",
  },
  {
    id: 27,
    name: "Avocado",
    price: 7.18,
    rating: "4.8",
    image: Fruit3,
    category: "Fruits",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit ipsa amet aliquid odio expedita, modi labore!",
  },
  {
    id: 28,
    name: "Banana",
    price: 8.18,
    rating: "4.8",
    image: Fruit6,
    category: "Fruits",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit ipsa amet aliquid odio expedita, modi labore!",
  },
  {
    id: 29,
    name: "Mango",
    price: 15.18,
    rating: "4.8",
    image: Fruit4,
    category: "Fruits",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit ipsa amet aliquid odio expedita, modi labore!",
  },
  {
    id: 30,
    name: "Cherry",
    price: 14.58,
    rating: "4.8",
    image: Fruit5,
    category: "Fruits",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit ipsa amet aliquid odio expedita, modi labore!",
  },
];

export default all_product;
