import React from "react";
import Classes from "/src/Components/Gallery/Gallery.module.css";
import image1 from "/src/assets/Images/FrencsFries/fries6.jpg";
import image2 from "/src/assets/Images/Fruits/fruit2.jpg";
import image3 from "/src/assets/Images/Chickens/chicken4.jpg";
import image4 from "/src/assets/Images/Donuts/donut.jpg";
import image5 from "/src/assets/Images/Pizza/pizza.jpg";
import image6 from "/src/assets/Images/Burgers/burger1.webp";
import image7 from "/src/assets/spaghetti.jpg";

const Gallery = () => {
  return (
    <>
      <div className={Classes.gallery}>
        <h1 className={Classes.title}>Gallery</h1>
        <div className={Classes.gallery_wriper}>
          <div className={`${Classes.gallery_content} ${Classes.content1}`}>
            <div className={Classes.sub_content1}>
              <img src={image5} alt="prodecut image" className={Classes.img} />
            </div>
            <div className={Classes.sub_content1}>
              <img src={image2} alt="prodecut image" className={Classes.img} />
            </div>
          </div>

          <div className={`${Classes.gallery_content} ${Classes.content2}`}>
            <div className={Classes.sub_content2}>
              <img src={image3} alt="prodecut image" className={Classes.img} />
            </div>
            <div className={Classes.sub_content2}>
              <img src={image4} alt="prodecut image" className={Classes.img} />
            </div>
            <div className={Classes.sub_content2}>
              <img src={image1} alt="prodecut image" className={Classes.img} />
            </div>
          </div>

          <div className={`${Classes.gallery_content} ${Classes.content1}`}>
            <div className={Classes.sub_content1}>
              <img src={image6} alt="prodecut image" className={Classes.img} />
            </div>
            <div className={Classes.sub_content1}>
              <img src={image7} alt="prodecut image" className={Classes.img} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
