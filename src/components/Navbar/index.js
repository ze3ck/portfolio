import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { GiBlackHoleBolas } from "react-icons/gi";
import { FaBars } from "react-icons/fa";
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

const NavLogo = styled.a`
  cursor: pointer;
  width: 80%;
  padding: 0 6px;
  display: flex;
  justify-self: flex-start;
  text-decoration: none;
  align-items: center;
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
  }
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

const NavLink = styled.a`
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

const MobileMenuLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  margin: 8px 0;
  cursor: pointer;
  text-decoration: none;
`;

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const navigate = useNavigate();

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    navigate("/portfolio", { replace: true });
    setOpen(false);
  };

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo onClick={() => handleNavClick("home")}>
          <GiBlackHoleBolas size="3rem" />
        </NavLogo>
        <MobileIcon onClick={() => setOpen(!open)}>
          <FaBars />
        </MobileIcon>
        <NavItems>
          <NavLink onClick={() => handleNavClick("about")}>About</NavLink>
          <NavLink onClick={() => handleNavClick("skills")}>Skills</NavLink>
          <NavLink onClick={() => handleNavClick("experience")}>Experience</NavLink>
          <NavLink onClick={() => handleNavClick("contactme")}>Contact</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">
            Github Profile
          </GitHubButton>
        </ButtonContainer>
      </NavbarContainer>
      {open && (
        <MobileMenu>
          <MobileMenuLink onClick={() => handleNavClick("about")}>
            About
          </MobileMenuLink>
          <MobileMenuLink onClick={() => handleNavClick("skills")}>
            Skills
          </MobileMenuLink>
          <MobileMenuLink onClick={() => handleNavClick("experience")}>
            Experience
          </MobileMenuLink>
          <MobileMenuLink onClick={() => handleNavClick("contactme")}>
            Contact
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
