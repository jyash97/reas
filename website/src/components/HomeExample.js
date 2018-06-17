import React from "react";
import { styled, Flex, Grid } from "reakit";
import Editor from "./Editor";
import HomeExampleUI from "./HomeExampleUI";
import Preview from "./Preview";
import StateContainer from "../containers/StateContainer";

const initialCode = `
import React from "react";
import { Button, Popover } from "reakit";

<Popover.Container>
  {({ toggle, visible }) => (
    <Button onClick={toggle}>
      Click me
      <Popover visible={visible}>
        <Popover.Arrow />
        Popover
      </Popover>
    </Button>
  )}
</Popover.Container>
`;

const Wrapper = styled(Flex)`
  width: 100%;
  justify-content: center;
  background-color: #282a36;
`;

const Content = styled(Grid)`
  max-width: 1200px;
  grid-gap: 20px;
  grid-auto-flow: column;
  align-items: end;
  @media (max-width: 768px) {
    grid-auto-flow: row;
  }
`;

const HomeExample = props => (
  <Wrapper {...props}>
    <StateContainer initialState={{ code: initialCode }}>
      {({ code, setState }) => (
        <Content>
          <Editor code={code.trim()} onChange={c => setState({ code: c })} />
          <HomeExampleUI>
            <Preview code={code.trim()} />
          </HomeExampleUI>
        </Content>
      )}
    </StateContainer>
  </Wrapper>
);

export default HomeExample;
