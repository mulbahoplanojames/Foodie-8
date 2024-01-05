import { Link } from "react-router-dom";
import styled from "styled-components";

const MoreMenu = styled.button`
  padding: 10px 20px;
  font-size: 1.2rem;
  border-radius: 10px;
  background: transparent;
  color: #34b96f;
  border: 1px solid #34b96f;
  cursor: pointer;
  transition: 0.5s ease-in-out;

  &:hover {
    border: 1px solid transparent;
    background: #34b96f;
    color: #ffffff;
  }
`;

const MoreMenuButton = () => {
  return (
    <>
      <Link to="/:menu">
        <MoreMenu>More Menu</MoreMenu>
      </Link>
    </>
  );
};

export default MoreMenuButton;
