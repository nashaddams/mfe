import { styled } from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const Header = styled.header`
  grid-area: header;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  font-size: 1.2rem;
  padding-top: 8px;

  :nth-child(1) {
    justify-self: left;
  }
  :nth-child(2) {
    justify-self: center;
    padding: 8px 16px;
    font-style: italic;
  }
  :nth-child(3) {
    justify-self: right;
    padding: 8px 16px;
  }
`;

export const Nav = styled.nav`
  grid-area: nav;
`;

export const Main = styled.main`
  grid-area: main;
`;

export const Link = styled(RouterLink)`
  display: block;
  cursor: pointer;
  text-decoration: none;
  color: gray;
  padding: 8px 16px;

  &:hover {
    color: darkgray;
  }
`;
