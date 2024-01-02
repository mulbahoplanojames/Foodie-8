import styled from "styled-components";

const CardWripper = styled.div`
  width: 300px;
  box-shadow: 2px 2px 2px 1px #000;
  border-radius: 10px;
  padding: 2% 1%;
  cursor: pointer;
  transition: 0.5s ease-out;

  &:hover {
    box-shadow: 2px 2px 2px 1px #34b970be;
    transform: translateY(-20px);
  }
`;

const Head = styled.div({
  height: "20vh",
  width: "60%",
  margin: "1% auto",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const Title = styled.h2({
  padding: "7% 0px 4% 0px ",
  textTransform: "capitalize",
});

const Description = styled.p({
  fontSize: "1rem",
  opacity: ".7",
});

const HowItWorks_card = (props) => {
  const { title, description, icon } = props;
  return (
    <>
      <CardWripper>
        <Head>{icon}</Head>
        <div className="body">
          <Title>{title}</Title>
          <Description>{description}</Description>
        </div>
      </CardWripper>
    </>
  );
};

export default HowItWorks_card;
