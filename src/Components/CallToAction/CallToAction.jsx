import Classes from "/src/Components/CallToAction/CallToAction.module.css";
import MoreMenuButton from "../../Interface/More_Menu_Button/MoreMenuButton";
import Order_Button from "../../Interface/Order_Now_Button/Order_Button";
import Image1 from "/src/assets/Images/Pizza/pizza5.webp";

const CallToAction = () => {
  return (
    <>
      <div className={Classes.call_to_action}>
        <div className={Classes.call_to_action_wripper}>
          <div className={Classes.call_to_action_content}>
            <h1 className={Classes.title}>
              Food delivery help you bring good to your front door.
            </h1>
            <div className="btn_wripper">
              <Order_Button />
              <MoreMenuButton />
            </div>
          </div>
          <div
            className={`${Classes.call_to_action_content} ${Classes.call_to_action_content2}`}
          >
            <img src={Image1} className={Classes.image} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CallToAction;
