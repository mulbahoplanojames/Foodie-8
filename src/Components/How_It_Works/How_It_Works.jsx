import Classes from "/src/Components/How_It_Works/How_It_Works.module.css";
import HowItWorks_card from "../HowItWorks_Card/HowItWorks_card";

import { FaTruckFast, FaCircleNodes } from "react-icons/fa6";
import { GiChickenOven } from "react-icons/gi";

const How_It_Works = () => {
  return (
    <>
      <div className={Classes.how_it_works}>
        <p className={Classes.key}>Works</p>
        <h1 className={Classes.title}>How it works</h1>
        <p className={Classes.description}>
          It is through much effort that you actually can grow, you get rid of
          everything that <br /> is not essential to make move to get bos.
        </p>

        <div className={Classes.work_steps_wripper}>
          <HowItWorks_card
            title={"Pick Meal"}
            description={
              " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat amet consequatur necessitatibus enim! Sunt, dolores.necessitatibus enim! Sunt, dolores. "
            }
            icon={<GiChickenOven className={Classes.icon} />}
          />
          <HowItWorks_card
            title={"Choose how often"}
            description={
              " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat amet consequatur necessitatibus enim! Sunt, dolores.necessitatibus enim! Sunt, dolores. "
            }
            icon={<FaCircleNodes className={Classes.icon} />}
          />
          <HowItWorks_card
            title={"Fast Deliveries"}
            description={
              " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat amet consequatur necessitatibus enim! Sunt, dolores.necessitatibus enim! Sunt, dolores. "
            }
            icon={<FaTruckFast className={Classes.icon} />}
          />
        </div>
      </div>
    </>
  );
};

export default How_It_Works;
