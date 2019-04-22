import React from "react";
import styled from "styled-components";

// styled will return a StyledComponent
// which exposed a className for us
const LinkComponent = ({ className, children, ...rest }) => (
  <a className={className} {...rest}>
    {children}
  </a>
);

export const Link = styled(LinkComponent)`
  display: block;
  margin: 0.5em;
`;

export const StyledLink = styled(Link)`
  color: palevioletred;
  font-weight: bold;
`;
