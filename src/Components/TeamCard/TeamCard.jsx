import React from "react";
import styled from "styled-components";
import {
  FaInstagramSquare,
  FaTwitterSquare,
  FaFacebookSquare,
  FaWhatsappSquare,
} from "react-icons/fa";

const CardWripper = styled.div`
  width: 250px;
  padding: 2% 1.5%;
  border-radius: 10px;
  text-align: center;
  box-shadow: 2px 2px 2px 2px #000;
  cursor: pointer;
  transition: 0.5s ease-in;

  &:hover {
    transform: translateY(-20px);
  }
`;

const ImageWripper = styled.div({
  height: "25vh",
  width: "200px",
  margin: "0px auto",
});

const Name = styled.h2({
  padding: "13% 0px 5% 0px",
});

const Position = styled.p({
  padding: "0px 0px 9% 0px",
});

const IconContentWripper = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "20px",
});

const IconWripper = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 5px;
  background: #000;
  color: #ffff;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    color: #34b96f;
  }
`;

const Icon = {
  fontSize: "1.6rem",
};

const img = {
  width: "100%",
  height: "100%",
};

const TeamCard = (props) => {
  const { name, image, position } = props;

  return (
    <>
      <CardWripper>
        <ImageWripper>
          <img src={image} alt="Team member image" style={img} />
        </ImageWripper>
        <Name>{name}</Name>
        <Position>{position}</Position>
        <IconContentWripper>
          <IconWripper>
            <FaInstagramSquare style={Icon} />
          </IconWripper>
          <IconWripper>
            <FaTwitterSquare style={Icon} />
          </IconWripper>
          <IconWripper>
            <FaWhatsappSquare style={Icon} />
          </IconWripper>
          <IconWripper>
            <FaFacebookSquare style={Icon} />
          </IconWripper>
        </IconContentWripper>
      </CardWripper>
    </>
  );
};

export default TeamCard;
