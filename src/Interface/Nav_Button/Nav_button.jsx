import styled from "styled-components";

const NavButton = styled.button`
  padding: 6px 10px;
  font-size: 1rem;
  border-radius: 10px;
  background: transparent;
  border: 1px solid #000;
  cursor: pointer;
  margin-right: 7px;
  transition: 0.5s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const Nav_button = () => {
  return (
    <>
      <NavButton>Join Us</NavButton>
    </>
  );
};

export default Nav_button;
