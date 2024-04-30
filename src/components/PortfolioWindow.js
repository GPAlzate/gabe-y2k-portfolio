import original from 'react95/dist/themes/original';
import { ScrollView, ScrollViewProps } from 'react95/dist/ScrollView/ScrollView';
import styled, {ThemeProvider} from "styled-components";
import Center from "./Center";
import React, { Component } from "react";

import {
    Window,
    WindowHeader,
    WindowContent,
} from "react95";

const LeftAlignedCenter = styled(Center)`
  text-align: left;
`;

const PortfolioContent = styled(ScrollView)`
  width: 250px;
  margin: 1rem 0;
  background: ${({ theme }) => theme.canvas};
`;

  class PortfolioWindow extends Component {
    render () {
      return (
        <LeftAlignedCenter>
          <ThemeProvider theme={original}>
            <Window shadow={true}>
              <WindowHeader>
                <span style={{ marginLeft: 4 }}>
                  about me!
                </span>
              </WindowHeader>
              <WindowContent>
                <PortfolioContent></PortfolioContent>
              </WindowContent>
            </Window>
          </ThemeProvider>
        </LeftAlignedCenter>
      );
    }
  }

  export default PortfolioWindow;