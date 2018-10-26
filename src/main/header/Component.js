import React from "react";
import styled from "styled-components";
import backgroundUrl from "../../assets/marina-sparks.jpg";

function HeaderComponent(props) {
  const OuterHeader = styled.div`
    height: 70vh;
    background: url(${backgroundUrl}) no-repeat center center;
    background-size: cover;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    color: #dcdcdc;
    font-family: "Lato", sans-serif;
    min-width: 375px;
    position: relative;
    width: 100%;
    z-index: 50;

    @media (min-width: 700px) {
      background: url(${backgroundUrl}) no-repeat center center fixed;
      background-size: cover;
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
    }
  `;

  const Overlay = styled.div`
    z-index: 1;
    height: 100%;
    width: 100%;
    background: rgba(39, 58, 100, 0.25);
    align-items: flex-end;
    display: flex;
    flex-direction: row-reverse;
  `;

  const HeadText = styled.h1`
    font-size: 3.5em;
    font-weight: 300;
    margin-bottom: 10px;
    font-style: italic;
  `;

  const SubHeadText = styled.h2`
    font-size: 2.5em;
    font-weight: 300;
    margin-top: 10px;
    font-style: italic;
  `;

  const TextContainer = styled.div`
    margin: 5% 10%;
    text-align: right;
  `;

  return (
    <OuterHeader>
      <Overlay>
        <TextContainer>
          <HeadText>Jamie Woodmancy, MBA</HeadText>
          <SubHeadText>Full Stack React Web Developer</SubHeadText>
        </TextContainer>
      </Overlay>
    </OuterHeader>
  );
}

export default HeaderComponent;
