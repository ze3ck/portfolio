import React from "react";
import styled from "styled-components";
import { Row } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { MDBFooter, MDBContainer, MDBBtn } from "mdb-react-ui-kit";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const ContactContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 30px;
  gap: 30px;
  justify-content: center;
  align-items: center;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(25, 25, 36);
  width: 100vw; /* Cubrir todo el ancho de la pantalla */
  margin-left: calc(-50vw + 50%); /* Asegurarse de que esté centrado */
  padding: 1rem 0;
`;

const SocialIcons = styled.section`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

const SocialIconButton = styled(MDBBtn)`
  margin: 0 5px; /* Añadir margen horizontal para la separación */
  padding: 10px; /* Asegurar que todos los íconos tengan el mismo tamaño de padding */
  transition: none !important; /* Desactivar cualquier transición predeterminada */
  &:hover, &:focus {
    transform: none !important; /* Desactivar cualquier transformación */
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CopyrightText = styled.div`
  text-align: center;
  color: rgba(
    255,
    255,
    255,
    0.6
  ); /* Texto en blanco con un poco de transparencia */
`;

const ContactMe2 = () => {
  return (
    <section id="contactme">
      <Container id="contactme">
        <Wrapper>
          <ContactContainer>
            <Row>
              <MDBFooter className="bg-dark text-center text-white">
                <MDBContainer className="p-4 pb-0">
                  <FooterContent>
                    <SocialIcons className="mb-4">
                      <SocialIconButton
                        outline
                        color="light"
                        floating
                        href="https://github.com/ze3ck"
                        role="button"
                        style={{ color: "white" }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <IconWrapper>
                          <AiFillGithub size={30} />
                        </IconWrapper>
                      </SocialIconButton>
                      <SocialIconButton
                        outline
                        color="light"
                        floating
                        href="https://www.instagram.com/b.leytonm"
                        role="button"
                        style={{ color: "white" }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <IconWrapper>
                          <AiFillInstagram size={30} />
                        </IconWrapper>
                      </SocialIconButton>
                      <SocialIconButton
                        outline
                        color="light"
                        floating
                        href="https://www.linkedin.com/in/bastian-leyton-mardones/"
                        role="button"
                        style={{ color: "white" }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <IconWrapper>
                          <FaLinkedinIn size={30} />
                        </IconWrapper>
                      </SocialIconButton>
                    </SocialIcons>
                    <CopyrightText>
                      © 2024. Developed by Bastian Leyton Mardones
                    </CopyrightText>
                  </FooterContent>
                </MDBContainer>
              </MDBFooter>
            </Row>
          </ContactContainer>
        </Wrapper>
      </Container>
    </section>
  );
};

export default ContactMe2;
