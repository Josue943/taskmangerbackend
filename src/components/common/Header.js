import React, { useContext } from "react";
import styled from "@emotion/styled";
import { AuthContext } from "../../contexts/auth/AuthContext";

const Header = () => {
  const { state, logout } = useContext(AuthContext);
  const { user } = state;

  return (
    <NavBar>
      <ul>
        <li>
          {" "}
          Hi <strong>{user ? user.name : null}</strong>
        </li>
        <li
          onClick={() => {
            logout();
          }}
        >
          Log Out
        </li>
      </ul>
    </NavBar>
  );
};

const NavBar = styled.nav`
  grid-area: nav;
  padding: 15px;
  background: #293040;
  ul {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }
  li {
    font-size: 22px;
    flex-basis: 115px;
    color: white;
    text-align: center;
    cursor: pointer;
    :last-of-type {
      font-size: 20px;
    }
    strong {
      color: white;
    }
  }
`;

export default Header;
