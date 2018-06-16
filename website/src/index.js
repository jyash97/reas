import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider, Provider, styled, Block } from "reakit";
import "./globalStyles";
import theme from "./theme";
import Home from "./pages/Home";
import Sections from "./pages/Sections";

const Wrapper = styled(Block)`
  font-family: sans-serif;
`;

const App = props => (
  <Provider initialState={{ config: props.config }}>
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Router>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/" render={p => <Sections {...props} {...p} />} />
          </Switch>
        </Router>
      </Wrapper>
    </ThemeProvider>
  </Provider>
);

export default App;
