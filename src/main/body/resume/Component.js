import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import SkillsComponent from "../skills/Component";

export default function ResumeComponent(props) {
  const BodyMdStyles = styled.div`
    font-size: 16px;
    font-family: "Lato", sans-serif;
    font-weight: 300;
    margin-top: 20px;
    text-align: left;
  `;

  const HeaderMdStyles = styled.div`
    margin-top: 20px;
    text-align: center;
  `;

  return (
    <div>
      <HeaderMdStyles>
        <ReactMarkdown source={props.resumeHead} />
      </HeaderMdStyles>
      <SkillsComponent />
      <BodyMdStyles>
        <ReactMarkdown source={props.resumeBody} />
      </BodyMdStyles>
    </div>
  );
}
