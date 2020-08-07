import React from "react";
import styled from "styled-components";

export default function ActionButton(props: any) {
  return (
    <StyledActionButton {...props}>{props.text as string}</StyledActionButton>
  );
}

const StyledActionButton = styled.div`
  text-align: center;
  font-weight: 700;
  font-size: 15px;
  color: #fff;
  background-color: #4e71fb;
  padding: 15px 28px;
  box-shadow: #4e71fb5e 0 6px 9px;
`;
