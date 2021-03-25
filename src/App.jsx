import React, { Component } from "react";

import { Button, ReversedButton, TomatoButton } from "./components/Button";
import { Container, Wrapper } from "./components/Wrapper";
import { Introduction, Title } from "./components/Title";
import { Link, StyledLink } from "./components/Link";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Wrapper>
          <Title>
            Getting started with <code>styled-components</code>
          </Title>
          <Container>
            <Introduction>1.Buttons</Introduction>
            <Button>Normal Button</Button>
            <Button primary>Primary Button</Button>
            <TomatoButton>Tomato Button</TomatoButton>
            <Button as="a" href="/" target="_blank">
              Link with Normal Button
            </Button>
            <TomatoButton as="a" href="/" target="_blank">
              Link with Tomato Button
            </TomatoButton>
            <Button as={ReversedButton}>Reserved Button</Button>
          </Container>
          <Container>
            <Introduction>2.Links with Custom Component</Introduction>
            <Link href="/">
              Un-styled, boring Link
              <span role="img" aria-label="boring">
                😒
              </span>
            </Link>
            <StyledLink href="/">
              Styled, exciting Link
              <span role="img" aria-label="loved">
                😍
              </span>
            </StyledLink>
          </Container>
        </Wrapper>
      </div>
    );
  }
}

export default App;
