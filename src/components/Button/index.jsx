import styled, { css } from "styled-components";

import React from "react";

// Use styled with props to define a styled button
const Button = styled.button`
  display: inline-block;
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  margin: 0.5em;
  padding: 1em;
  text-decoration: none;
  cursor: pointer;
  outline: none;

  ${props =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `};
  &:focus {
    border-color: #ff007f;
    box-shadow: 3px 3px 5px #ff007f;
  }
`;

// Extends Button
const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
  &:focus {
    border-color: #ff5500;
    box-shadow: 3px 3px 5px #ff5500;
  }
`;

const ReversedButton = props => (
  <button {...props} children={props.children.split("").reverse()} />
);

export { Button, TomatoButton, ReversedButton };
