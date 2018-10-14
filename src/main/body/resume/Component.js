import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";

export default function ResumeComponent(props) {
  const MarkdownStyles = styled.div`
    font-size: 16px;
    font-family: "Lato", sans-serif;
    font-weight: 300;
    margin-top: 20px;
  `;

  console.log(props.resume);
  return (
    <MarkdownStyles>
      <ReactMarkdown className="markdown" source={props.resume} />
    </MarkdownStyles>
  );
}
