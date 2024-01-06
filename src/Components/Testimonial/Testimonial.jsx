import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonailCard from "../Teestimonial_Card/TestimonailCard";
import client1 from "/src/assets/Images/Client_Img/avatar-ali.png";
import client2 from "/src/assets/Images/Client_Img/avatar-anisha.png";
import client3 from "/src/assets/Images/Client_Img/avatar-richard.png";
import client4 from "/src/assets/Images/Client_Img/avatar-shanai.png";
import client5 from "/src/assets/Images/Client_Img/client1.jpg";

const TestimonialMain = styled.div({
  padding: "5% 2%",
});

const Title = styled.h1({
  textAlign: "center",
  paddingBottom: "1.4%",
  textTransform: "capitalize",
});

const TestimonialWripper = styled.div({
  padding: "1.4% 0px ",
});

function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#000" }}
      onClick={onClick}
    />
  );
}

const Testimonial = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <TestimonialMain>
        <Title>What they are saying?</Title>
        <TestimonialWripper>
          <Slider {...settings}>
            <TestimonailCard
              Name={"Ali Jessica P."}
              Clientimage={
                <img src={client1} style={{ width: "100%", height: "100%" }} />
              }
              description={
                "This food ordering site is a foodie's dream come true! The extensive selection of restaurants caters to every craving, and the reviews and ratings help me make informed choices. The delivery is always on time, and the food arrives hot and delectable. "
              }
            />
            <TestimonailCard
              Name={" Alex K. Richard"}
              Clientimage={
                <img src={client3} style={{ width: "100%", height: "100%" }} />
              }
              description={
                "Exceptional service! I've been a loyal customer for months, and I can't get enough of the seamless ordering process. The site offers a plethora of options, from local favorites to international delights. Quick deliveries and top-notch customer service."
              }
            />
            <TestimonailCard
              Name={"Sarah M. Anisha"}
              Clientimage={
                <img src={client2} style={{ width: "100%", height: "100%" }} />
              }
              description={
                "I love using this food ordering site! The interface is user-friendly, and the variety of restaurants and cuisines is impressive. The delivery is always prompt, and the food arrives fresh and delicious. Definitely my go-to for hassle-free dining at home!"
              }
            />
            <TestimonailCard
              Name={"Philip Freeman"}
              Clientimage={
                <img src={client5} style={{ width: "100%", height: "100%" }} />
              }
              description={
                "I'm blown away by the convenience and efficiency of this food ordering platform. The real-time tracking feature ensures I know exactly when my order will arrive, and the diverse range of restaurants means I can explore new flavors without leaving.!"
              }
            />
            <TestimonailCard
              Name={"Emily R. Teach"}
              Clientimage={
                <img src={client4} style={{ width: "100%", height: "100%" }} />
              }
              description={
                " As a busy professional, this food ordering site has been a game-changer for me. The easy-to-navigate app and quick delivery options have saved me so much time. The quality of the food is consistently excellent, and the customer support team."
              }
            />
          </Slider>
        </TestimonialWripper>
      </TestimonialMain>
    </>
  );
};

export default Testimonial;
