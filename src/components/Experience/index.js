import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import React from "react";
import styled from "styled-components";
import { experiences } from "../../data/constants";

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

export const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const TimeLineSection = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

const Experience = () => {
  return (
    <Container id="experience">
      <Wrapper>
        <Title>Experience</Title>
        <Desc>Here are some of my experiences</Desc>
        <TimeLineSection>
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "rgb(23,23,33)",
                  color: "#fff",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(23,23,33)",
                }}
                date={experience.date}
                iconStyle={{ background: "rgb(23,23,33)", color: "#fff" }}
                icon={
                  <div className="vertical-timeline-element-icon bounce-in">
                    <img
                      src={experience.img}
                      alt={experience.role}
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "50%",
                      }}
                    />
                  </div>
                }
              >
                <h3 className="vertical-timeline-element-title">
                  {experience.role}
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  {experience.company}
                </h4>
                <p>{experience.desc}</p>
                <br />
                {experience.skills && (
                  <div>
                    <h4>Skills:</h4>
                    <ul>
                      {experience.skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </TimeLineSection>
      </Wrapper>
    </Container>
  );
};

export default Experience;
