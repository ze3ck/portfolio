import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

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

const ContactMe2 = () => {
  return (
    <Container id="contactme">
      <Wrapper>
        <Title>Contact Me</Title>
        <ContactContainer>
          <Row>
            <Col md={12} className="home-about-social">
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                    href="https://github.com/ze3ck"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                    style={{ color: "RGB(255 255 255)" }}
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                    style={{ color: "RGB(255 255 255)" }}
                  >
                    <AiOutlineTwitter />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/bastian-leyton-mardones/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                    style={{ color: "RGB(255 255 255)" }}
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.instagram.com/b.leytonm"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                    style={{ color: "RGB(255 255 255)" }}
                  >
                    <AiFillInstagram />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </ContactContainer>
      </Wrapper>
    </Container>
  );
};

export default ContactMe2;
