import Classes from "/src/Components/Popular_Dishes/PopularDishes.module.css";
import PopularDishesCard from "../PopularDisahes_Card/PopularDishesCard";
import popular_dishes from "../../Data/Popular_dishes";

const PopularDishes = () => {
  return (
    <>
      <div className={Classes.popular_dishes}>
        <h1 className={Classes.title}>Popular Dishes</h1>

        <div className={Classes.popular_dishes_wripper}>
          {popular_dishes.map((data, i) => {
            return (
              <PopularDishesCard
                key={i}
                Id={data.itemId}
                name={data.name}
                price={data.price}
                rating={data.rating}
                image={data.image}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PopularDishes;
