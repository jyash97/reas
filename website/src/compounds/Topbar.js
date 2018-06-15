import React from "react";
import { styled, Flex, Button, List, Grid, Link } from "reas";
import MenuIcon from "react-icons/lib/md/menu";
import LogoTypo from "../elements/LogoTypo";
import ContentWrapper from "../elements/ContentWrapper";
import ViewportContainer from "../containers/ViewportContainer";
import LogoSymbol from "../elements/LogoSymbol";

const Wrapper = styled(Flex)`
  position: fixed;
  top: 0;
  left: 0;
  border-bottom: 1px solid #eee;
  height: 60px;
  width: 100%;
  justify-content: center;
  background-color: white;
  z-index: 999;
`;

const Topbar = props => (
  <Wrapper {...props}>
    <ContentWrapper width="100%" alignItems="center">
      <ViewportContainer>
        {({ width }) =>
          width > 768 ? (
            <Grid column gap={20} alignItems="center">
              <LogoTypo height={24} />
              <List as={[Grid, "menu"]} column justifyItems="center" gap={20}>
                <List.Item margin={0}>
                  <Link href="/">Guide</Link>
                </List.Item>
                <List.Item margin={0}>
                  <Link href="/">Components</Link>
                </List.Item>
              </List>
            </Grid>
          ) : (
            <React.Fragment>
              <Button background="transparent" border={0} padding="0">
                <MenuIcon width="1.5em" height="1.5em" />
              </Button>
              <LogoSymbol relative height={24} margin="auto" left={-20} />
            </React.Fragment>
          )
        }
      </ViewportContainer>
    </ContentWrapper>
  </Wrapper>
);

export default Topbar;
