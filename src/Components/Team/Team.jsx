import React from "react";
import styled from "styled-components";
import TeamCard from "../TeamCard/TeamCard";
import team_data from "../../Data/Team_data";

const TeamMain = styled.div({
  padding: "5% 1.5% ",
});

const TeamCardWripper = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "50px",
});

const Title = styled.h1({
  textAlign: "center",
  fontSize: "2.2rem",
  textTransform: "uppercase",
  paddingBottom: "4%",
});

const Team = () => {
  return (
    <>
      <TeamMain>
        <Title>Meet our team</Title>

        <TeamCardWripper>
          {team_data.map((data, i) => {
            return (
              <TeamCard
                key={i}
                id={data.id}
                name={data.name}
                image={data.image}
                position={data.position}
              />
            );
          })}
        </TeamCardWripper>
      </TeamMain>
    </>
  );
};

export default Team;
