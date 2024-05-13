import React from "react";
import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { DiCssdeck } from "react-icons/di";
import { FaBars } from "react-icons/fa";
import { MdOutlineOpenInBrowser } from "react-icons/md";
import { useTheme } from "styled-components";
import { Bio } from "../../data/constants";

const Nav = styled.nav`
  background: ${({ theme }) => theme.card_light};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

const NavLogo = styled(LinkR)`
  width: 80%;
  padding: 0 6px;
  display: flex;
  justify-self: flex-stact;
  cursor: pointer;
  text-decoration: none;
  align.items: center;
  @media screen and (max-width: 640px) {
    padding: 0 0px;
  }
  color: ${({ theme }) => theme.text_primary};
`;

const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 50%);
    font-size: 1.5rem;
    cursor: pointer;
    color: #0061a9;
`;

const NavItems = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
  list-style: none;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;  

const NavLink = styled(LinkR)`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: #003e6c;
  }
`;

const GitHubButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1.8px solid #003e6c;
  border-radius: 20px;
  color: #003e6c;
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;
  &:hover {
    background: #003e6c;
    color: ${({ theme }) => theme.white};
  }
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const MobileMenu = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 60px;
    right: 0;
    width: 100%;
    padding: 20px 0;
    background: ${({ theme }) => theme.card_light};
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    z-index: 999;
  }
`;

const Span = styled.div`
  padding: 0 4px;
  font-weight: bold;
  font-size: 18px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 80%;
  height: 100%;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const MobileMenuLink = styled(NavLink)`
  color: ${({ theme }) => theme.text_primary};
  margin: 8px 0;
`;

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <DiCssdeck size="3rem" />
          
        </NavLogo>
        <MobileIcon onClick={() => setOpen(!open)}>
          <FaBars />
        </MobileIcon>
        <NavItems>
          <NavLink to="#about">About</NavLink>
          <NavLink to="#skills">Skills</NavLink>
          <NavLink to="#experience">Experience</NavLink>
          <NavLink to="#projects">Projects</NavLink>
          <NavLink to="#education">Education</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">
            Github Profile
          </GitHubButton>
        </ButtonContainer>
      </NavbarContainer>
      {open && (
        <MobileMenu>
          <MobileMenuLink to="#about" onClick={() => setOpen(false)}>
            About
          </MobileMenuLink>
          <MobileMenuLink to="#skills" onClick={() => setOpen(false)}>
            Skills
          </MobileMenuLink>
          <MobileMenuLink to="#experience" onClick={() => setOpen(false)}>
            Experience
          </MobileMenuLink>
          <MobileMenuLink to="#projects" onClick={() => setOpen(false)}>
            Projects
          </MobileMenuLink>
          <MobileMenuLink to="#education" onClick={() => setOpen(false)}>
            Education
          </MobileMenuLink>
          <GitHubButton href={Bio.github} target="_blank">
            Github Profile
          </GitHubButton>
        </MobileMenu>
      )}
    </Nav>
  );
};

export default Navbar;
